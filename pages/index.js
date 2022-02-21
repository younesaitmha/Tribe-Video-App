import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoadingScreen from '../components/LoadingScreen';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className={styles.container}>
      <title>Tribe Video App</title>

      {loading ? (<LoadingScreen />) : (
      <React.Fragment>
        <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.headerH1}>Tribe App</h1>
          <div className={styles.auth}>
            <Link href='/auth/signin'><span className={styles.register}>Register</span></Link>
            <Link href='/auth/signin'><span className={styles.login}>Login</span></Link>
          </div>
        </div>

          <div className={styles.section1}>
            <div styles={{marginLeft: '0', paddingLeft: '0'}}>
              <Image src="/group10.png" width={46} height={176} alt="img style" />
            </div>
            <div className={styles.section1Desc}>
              <h1 className={styles.title}>
                Welcome to <Link href="/">Tribe Video</Link>
              </h1>
              <p className={styles.description}>
                Application that allows us to upload, list our videos and watch others videos.
              </p>
              <Link href='/auth/signup'><div className={styles.btnStart}><i class="bi bi-steam"></i><span>Start Now</span></div></Link>
            </div>
            <Image src='/video_files.png' width={640} height={383} styles={{flexBasis: '60%'}} alt="img style" />
          </div>

          <div className={styles.section2}>

            <div styles={{flexBasis:'45%'}}></div>

            <div className={styles.pointWrapper}>
              <div style={{border: '2px solid #0070f3', width: '22px', height: '42px', borderRadius: '11px', display: 'flex', justifyContent: 'center'}}>
                <div className={styles.point}></div>
              </div>
              <h3>Created By</h3>
              <div className={styles.line}></div>
            </div>

            <Image src='/group11.svg' styles={{right: '0'}} width={80} height={176} />

          </div>


          <div className={styles.sectionMain}>
            <Image className={styles.imgSt} src='/group12.svg' width={80} height={220} />

            <div className={styles.grid}>

              <div className={styles.card}>
                <Image src="/aitmha.svg" width={200} height={200} />
                <h2>Younes Ait M'ha</h2>
                <p>Software Engineering Student at INSEA</p>
                <div className={styles.socialMedia}>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-github"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>

              <div className={styles.card}>
                <Image src="/farfaoua.svg" width={200} height={200} />
                <h2>Farfaoua Amine</h2>
                <p>Software Engineering Student at INSEA</p>
                <div className={styles.socialMedia}>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-github"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>

              <div className={styles.card}>
                <Image src="/mouzaki.svg" width={200} height={200} />
                <h2>Younes Mouzaki</h2>
                <p>Software Engineering Student at INSEA</p>
                <div className={styles.socialMedia}>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-github"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>

              <div className={styles.card}>
                <Image src="/maatouf.svg" width={200} height={200} />
                <h2>Maatouf Saad</h2>
                <p>Software Engineering Student at INSEA</p>
                <div className={styles.socialMedia}>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-github"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>

            </div>
            <Image src='/group13.svg' width={110} height={220} />
          </div>

        </main>

        <footer className={styles.footer}>
          <a
            href="https://twitter.com/MhaYounes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.footerTitle}>
              Last class "Project" ❤️ 2022 INSEA.<br />
              <span className={styles.cadre}>Thanks a lot to the senior software engineer Mouad Belbah for his<br />
              efforts teaching us MERN Stack and also for this insightful project.</span>
            </span>
          </a>
        </footer>
      </React.Fragment>
      )}

    </div>)
}
