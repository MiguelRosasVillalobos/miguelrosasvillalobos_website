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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Image
            alt="Mountains"
            // Importing an image will
            // automatically set the width and height
            src={profilePic}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
      </main>
    </div>
  );
}
