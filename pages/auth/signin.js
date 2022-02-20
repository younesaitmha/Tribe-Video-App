import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { setAuthToken } from './../../lib/ApolloClient.js'
import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'

import styles from './../../styles/login.module.css'
import LoadingScreen from './../../components/LoadingScreen'
import Input from './../../components/Input'
import Button from './../../components/Button'
import Link from 'next/link';

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      token
    }
  }
`

const Signin = () => {
    //const router = useRouter()

    // Form State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)

    //const [login] = useMutation(LOGIN_MUTATION)

    const handleLogin = async (e) => {
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
              email: email,
              password: password,
            },
          },
        })
        if (result.success) {
          setAuthToken(result.token)

          router.replace('/')
        }
        setLoading(false)
        throw result
      } catch (e) {
        console.log(e)
        setMessage(e.message)
        setLoading(false)
        setDisabled(false)
      }
    }

    const handleValidation = useCallback(() => {
      // Test for Alphanumeric password
      const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

      // Unable to send form unless fields are valid.
      if (dirty) {
        setDisabled(!validate(email) || password.length < 7 || !validPassword)
      }
    }, [email, password, dirty])

    useEffect(() => {
      handleValidation()
    }, [handleValidation])

    return (
      <div className={styles.container}>
        <title>Tribe Video App</title>

        { loading ? (<LoadingScreen />) :
        (<div className={styles.form}>
          <h3 className={styles.welcome}> Welcome to TribeVideo</h3>

          <div className={styles.wrapper}>
            <Input label={'Email'} id={'email'} type={'e-mail'} name={'email'} placeholder={'example@email.com'} style={{width:'100%'}} />
          </div>

          <div className={styles.wrapper}>
            <Input label={'Password'} id={'password'} type={'password'} name={'name'} placeholder={'********'} />
          </div>

          <div style={{width: '90%', paddingLeft: '7%', paddingTop: '4%', paddingBottom: '0'}}>
            <Link className={styles.link} href='/auth/resetPassword'>Forgot your password?</Link>
          </div>

          <Button type={'btn'} text={'Log in'} />

          <p className='p-account'>Don't have account? <Link href='/auth/signup' className={styles.link} >Sign up</Link></p>
        </div>)}
      </div>
    )
}

export default Signin;
