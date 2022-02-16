import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react'
import styles from './../../styles/login.module.css'
import LoadingScreen from './../../components/LoadingScreen'
import Input from './../../components/Input'
import Button from './../../components/Button'


const Signup = () => {
    const [loading, setLoading] = useState(false)

    return (
        <div className={styles.container}>
            <Head>
                <title>Tribe Video App</title>
                <meta name="description" content="Tribe video app for uploading watching videos" />
                <link rel="icon" href="/profile.png" />
            </Head>
            { !loading ? <LoadingScreen /> : <></>}

            <div className={styles.formSignup}>
                <h3 className={styles.welcome} style={{marginTop: '10%'}}> Sign up to start uploading</h3>

                <div className={styles.wrapper}>
                    <Input fontSize={'0.8em'} label={'Name'} id={'email'} type={'e-mail'} name={'email'} placeholder={'placeholder'} style={{width:'100%'}} />
                </div>

                <div className={styles.wrapper}>
                    <Input fontSize={'0.8em'} label={'Email'} id={'email'} type={'e-mail'} name={'email'} placeholder={'placeholder'} style={{width:'100%'}} />
                </div>

                <div className={styles.wrapper}>
                    <Input fontSize={'0.8em'} label={'Password'} id={'password'} type={'password'} name={'name'} placeholder={'placeholder'} />
                </div>

                <div style={{width: '90%', paddingLeft: '7%', paddingTop: '4%', paddingBottom: '0'}}>
                    <a className={styles.link} href='/'>Forgot your password?</a>
                </div>

                <Button type={'btn'} text={'Log in'} />

            </div>
        </div>
    )
}

export default Signup;
