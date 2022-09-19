import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Griffin
        </h1>

        <Button
          label={'launch app'}
          size="lg"
          onClickHandler={() => {
            // authentication

            // if autenticated, load dashboard
            router.push('/dashboard')
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
