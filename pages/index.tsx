import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div id="content">
      <Head>
        <title>onuryildiz.dev</title>
      </Head>
      <div id="navbar">
        <span id="logo">ONURYILDIZ.DEV</span>
        <ul id="contacts">
          <li>
            <a href="https://www.linkedin.com/in/onur-yildiz-833710183/" target="_blank" rel="noreferrer"><img src="linkedln.svg" alt='linkedln' /></a>
          </li>
          <li>
            <a href="mailto: onuryildiz@gmail.com" target="_blank" rel="noreferrer"><img src="email.svg" alt='email' /></a>
          </li>
        </ul>
      </div>

      <div id="description">
        <h1>Hey, I’m <span>Onur</span></h1>
        <p>
          I’m a <span>full stack developer</span>.<br />
          I can develop softwares for anywhere.
        </p>
      </div>
      <div id="underConstruction">
        🚧 Under Construction 🚧
      </div>
    </div>
  )
}

export default Home
