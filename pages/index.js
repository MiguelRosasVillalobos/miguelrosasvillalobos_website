import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../public/CV_photo.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miguel Rosas Villalobos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hola soy Miguel Rosas Villalobos
          <Link href="/about"> Acerca de mi</Link>
        </h1>
      <Image
      src={profilePic}
      alt="Picture of the author"
      width={20rem} automatically provided
      height={20rem} automatically provided
      />
      </main>
    </div>
  );
}
