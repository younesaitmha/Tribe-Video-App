import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoadingScreen from '../components/LoadingScreen';
import React from 'react';

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tribe Video App</title>
        <meta name="description" content="Tribe video app for uploading watching videos" />
        <link rel="icon" href="/profile.png" />
      </Head>

      {loading ? <LoadingScreen /> : <></>}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://tribe-video-app.vercel.app/">Tribe Video</a>
        </h1>

        <p className={styles.description}>
          Tribe Video App is an application that allows us to upload, list our videos and watch others videos.
        </p>

        <div className={styles.containerLandingImg}>
          <div className={styles.landingImageTitle}>
            <h3> STAY POSTED! </h3>
          </div>
          <Image className={styles.landingImage} src="/background.webp" width={1800} height={1000} alt="background picture" />
        </div>

        <div className={styles.grid}>
          <a href="/auth/signup" className={styles.sign}>
            <h2>Sign Up &rarr;</h2>
          </a>

          <a href="/auth/signin" className={styles.sign}>
            <h2>Sign In &rarr;</h2>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/MhaYounes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by
          <span className={styles.logo}>
            <Image src="/default-monochrome.svg" alt="tribe video logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://twitter.com/FarfaouaMed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by&nbsp;
          <span style={{ color: "#19ceda" }}>
           Farfaoua
          </span>
        </a>
      </footer>

    </div>)
}
