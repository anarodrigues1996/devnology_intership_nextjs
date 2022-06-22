import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyFooter from './MyFooter.js'
import MyHeader from './MyHeader.js'
import SignUp from './SignUp.js'
import List from './List'

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <MyHeader />
      <SignUp />
      <List />
      <MyFooter />
    </main>
  )
}
