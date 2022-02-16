import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react'
import styles from './../../styles/login.module.css'
import LoadingScreen from '../../components/LoadingScreen'
import Input from '../../components/Input'
import Button from '../../components/Button'


const ResetPassword = () => {
    const [loading, setLoading] = useState(false)

    return (
        <div className={styles.container}>
            { !loading ? <LoadingScreen /> : <></>}
            <Head>
                <title>Tribe Video App</title>
                <meta name="description" content="Tribe video app for uploading watching videos" />
                <link rel="icon" href="/profile.png" />
            </Head>

            <div className={styles.formSignup} style={{minHeight: '450px'}}>
                <h3 className={styles.welcome} style={{marginTop: '14%'}}> Reset your password</h3>

                <div className={styles.wrapper}>
                    <Input label={'New password'} id={'email'} type={'password'} name={'email'} placeholder={'placeholder'} style={{width:'100%'}} />
                </div>

                <div className={styles.wrapper}>
                    <Input label={'Confirm password'} id={'password'} type={'password'} name={'name'} placeholder={'placeholder'} />
                </div>

                <Button type={'btn'} text={'Submit'} />

            </div>
        </div>
    )
}

export default ResetPassword;
