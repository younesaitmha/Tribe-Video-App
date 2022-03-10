import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

import { setAuthToken } from '../../lib/ApolloClientt.js'
import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'
import styles from './../../styles/login.module.css'
import LoadingScreen from './../../components/LoadingScreen'
import Input from './../../components/Input'
import Button from './../../components/Button'
import Link from 'next/link';


const SIGNUP_MUTATION = gql`
    mutation login($input: LoginInput!) {
        login(input: $input) {
        success
        message
        token
        }
    }
`

const Signup = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const [login] = useMutation(SIGNUP_MUTATION)

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (!dirty && !disabled) {
        setDirty(true)
        handleValidation()
        }

        try {
        setLoading(true)
        setMessage('')
        const {
            data: { login: result },
        } = await login({
            variables: {
            input: {
                name: name,
                email: email,
                password: password,
            },
            },
        })
        if (result.success) {
            setAuthToken(result.token)
            router.replace('/dashboard')
        }
        setLoading(false)
        throw result
        } catch (e) {
        console.log(e);
        setMessage(JSON.stringify(e.message));
        setLoading(false);
        setDisabled(false);
        }
    }

    const handleValidation = useCallback(() => {
        // Test for Alphanumeric password
        const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

        // Unable to send form unless fields are valid.
        if (dirty) {
            setDisabled(!validate(email) || password.length < 7 || !validPassword)
        }
    }, [name, email, password, dirty])

    useEffect(() => {
        handleValidation()
    }, [handleValidation])

    return (
        <div className={styles.container}>
            <Head>
                <title>Tribe Video App</title>
                <meta name="description" content="Tribe video app for uploading watching videos" />
                <link rel="icon" href="/profile.png" />
            </Head>

            { !loading ? <LoadingScreen /> : (

            <form className={styles.formSignup} onSubmit={handleSignUp}>
                <h3 className={styles.welcome} style={{marginTop: '10%'}}> Sign up to start uploading</h3>

                {message && <div className={styles.errorMessage}>{message}</div>}

                <div className={styles.wrapper}>
                    <Input
                        label={'Name'}
                        id={'name'}
                        type={'text'}
                        name={'name'}
                        placeholder={'name'}
                        onChange={setName}
                    />
                </div>

                <div className={styles.wrapper}>
                    <Input
                        label={'Email'}
                        id={'email'}
                        type={'e-mail'}
                        name={'email'}
                        placeholder={'example@mail.com'}
                        onChange={setEmail}
                    />
                </div>

                <div className={styles.wrapper}>
                    <Input
                        label={'Password'}
                        id={'password'}
                        type={'password'}
                        name={'name'}
                        placeholder={'********'}
                        onChange={setPassword}
                    />
                </div>

                <div style={{width: '90%', paddingLeft: '7%', paddingTop: '4%', paddingBottom: '0'}}>
                    <Link className={styles.link} href='/auth/forgetPassword'> Forgot your password? </Link>
                </div>

                <Button type={'btn'} text={'Log in'} />

            </form>
            )}
        </div>
    )
}

export default Signup;
