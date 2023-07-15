import React from 'react'
import { useSelector } from 'react-redux'
import { Features } from '../Features'
import { Header } from '../Header'
import {Works} from '../Works'
import {OurTeam} from '../OurTeam'
import {Slider} from '../Slider'
import {Download} from '../Download'
import {Footer} from '../Footer'
import styles from './App.module.scss'

export const App = () => {
  const hamburgerState = useSelector((state) => state.hamburger)
  return (
    <div className={styles.app} style={hamburgerState ? { position: 'fixed' } : {}}>
      <Header />
      <Features />
      <Works />
      <OurTeam />
      <Slider />
      <Download />
      <Footer/>
    </div>
  )
}
