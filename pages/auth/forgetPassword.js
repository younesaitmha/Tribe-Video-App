import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head';
import styles from './../../styles/login.module.css'
import './../../styles/login.module.css'
import LoadingScreen from '../../components/LoadingScreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import animations from './../../styles/animations.module.css'
import Link from 'next/link';


const ForgetPassword = () => {
    const [loading, setLoading] = useState(false)

    return (
        <div className={styles.container}>
            { !loading ? <LoadingScreen /> : <></>}
            <Head>
                <title>Tribe Video App</title>
                <meta name="description" content="Tribe video app for uploading watching videos" />
                <link rel="icon" href="/profile.png" />
            </Head>

            <div className={styles.formSignup} style={{minHeight: '410px'}}>
                <h3 className={styles.welcome} style={{marginTop: '14%', marginBottom: '0'}}>Forget your password?</h3>
                <p className={styles.resetPasswordText} >It’s okay, we got you! What’s your email address?</p>

                <div className={styles.wrapper}>
                    <Input label={'Email'} id={'password'} type={'password'} name={'email'} placeholder={'example@mail.com'} style={{width:'100%'}} />
                </div>

                <Button type={'btn'} text={'Reset Password'} />

                <p className={styles.resetPasswordText} >Oh wait! I remembered!<br />Back to <Link href='/auth/signin' style={{color: '#0070f3'}}>Sign in</Link></p>

            </div>
        </div>
    );
}

export default ForgetPassword;
