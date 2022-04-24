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
    <Parallax pages={3} style={{ top: '0', left: '0' }}>

      <Intro />

      {/* Skills */}

      {
        skillsimages.map((image, i) => {
          let size = Math.random() * 4 + 3
          return (
            <ParallaxLayer key={image + i} offset={1} speed={Math.random()}>
              <div style={{
                position: "absolute",
                left: `${Math.floor(Math.random() * 80) + 10}vw`,
                top: `${Math.floor(Math.random() * 80) + 10}vh`,
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
        <h2 style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 5 }}>Firstly, My Skills</h2>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}

        speed={5}
        style={{ color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 5 }}>
          Nodejs<br />
          React<br />
          JavaScript<br />
          HTML / CSS<br />
          C / C++<br />
          Java<br />
          MongoDB<br />
          Mysql<br />
          Docker<br />
          Solidty / DAPP / Web3 / Ganache / Truffle<br />
        </p>
      </ParallaxLayer>

      {/* How is it started */}

      <ParallaxLayer offset={2} speed={1} style={{
        color: "white",
        textAlign: "center",
        fontSize: 36
      }}>
        <h2 style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 5 }}>How Is It Started?</h2>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={5}
        style={{ color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:"column", fontSize: 30 }}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 5 }}>
          When i was a child, i was interested in developing video games. I tried many programming languages and
          game engines. Some of them are Gamemaker (GML), Unity (C#), Allegro (C / C++), LibGDX (Java), Godot etc... I developed many
          game prototoypes but only few of them published on the internet.
        </p>
        <div>
          <div className={styles.game}>
            <span>Tin</span>
            <div className={styles.image}>
              <Image src={`/tin.png`} alt={"Tin"} layout="responsive" width={"100vw"} height={"100vh"} />
            </div>

            <span><a href="https://onury.itch.io/tin" target="_blank" rel="noreferrer" >Try it!</a></span>
          </div>

          <div className={styles.game}>
            <span>Forbidden Fruit</span>

            <div className={styles.image}>
              <Image src={`/forbiddenfruit.png`} layout="responsive" width={"100vw"} height={"100vh"} />
            </div>

            <span><a href="https://onury.itch.io/forbidden" target="_blank" rel="noreferrer" >Try it!</a></span>
          </div>

        </div>
      </ParallaxLayer>

    </Parallax>
  )
}

export default Home
