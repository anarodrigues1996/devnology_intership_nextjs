import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <header className='vh-100'>
        <div className='container'>
          <h1 className={styles.fontHu}>ESTAGIO</h1>
          <h2>PROVA DE SELECAO</h2>
        </div>
      </header>
      <section className='bg-info'>
        Section1
      </section>
      <section>
        section2
      </section>
      <footer>
        Footer
      </footer>

    </main>
  )
}
