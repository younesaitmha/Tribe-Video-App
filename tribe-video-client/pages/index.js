import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonTribe from '../components/Button';
import Input from '../components/Input';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tribe Video App</title>
        <meta name="description" content="Tribe video app for uploading watching videos" />
        <link rel="icon" href="/profile.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://tribe-video-app.vercel.app/">Tribe Video</a>
        </h1>

        <p className={styles.description}>
          Tribe Video App is an application that allows us to upload, list our videos and watch others videos.
        </p>

        <div className={styles.containerLandingImg}>
          <Image className={styles.landingImage} src="/background.webp" width={1800} height={1000} alt="background picture" />
          <h3 className={styles.landingImageTitle}>Stay Posted!</h3>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
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
      </footer>
      <ButtonTribe text={'hello'} type={'btn'} />
      <br />
      <Input id={'id'} type={'type'} name={'name'} placeholder={'placeholder'} label={'label'} />
    </div>
  )
}
