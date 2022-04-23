import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Intro from '../components/intro'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const skillsimages = [
  "html.png",
  "js.png",
  "java.png",
  "mongodb.png",
  "nodejs.png",
  "docker.png",
  "css.png",
  "blockchain.png",
  "mysql.png"
]

const Home: NextPage = () => {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>

      <Intro />

      {/* Skills */}

      {
        skillsimages.map((image,i) => {
          let size = Math.random()*4+3
          return (
            <ParallaxLayer key={image+i} offset={1} speed={Math.random() * 5+1}>
              <div style={{
                position: "absolute",
                left: `${Math.floor(Math.random() * 80)+10}vw`,
                top: `${Math.floor(Math.random() * 80)+10}vh`,
                width: `${size}vw`,
                height: `${size}vw`
              }}>
                <Image src={`/${image}`} alt={image} layout="fill" />

              </div>
            </ParallaxLayer>
          )
        })
      }

      <ParallaxLayer offset={1} speed={1} style={{
        color: "white",
        textAlign: "center",
        fontSize: 36
      }}>
        <h2>Firstly, My Skills</h2>
        
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}

        speed={0.5}
        style={{ color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:30 }}>
        <p style={{backgroundColor:"rgba(0,0,0,0.7)",borderRadius:5}}>

          Nodejs<br/>
          React<br/>
          JavaScript<br/>
          HTML / CSS<br/>
          C / C++<br/>
          Java<br/>
          MongoDB<br/>
          Mysql<br/>
          Solidty / DAPP / Web3 / Ganache / Truffle<br/>
        </p>
      </ParallaxLayer>

    </Parallax>
  )
}

export default Home
