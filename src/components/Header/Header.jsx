import React from 'react'
import { Background } from './Background'
import { HeaderContent } from './HeaderContent'
import { Navigation } from './Navigation'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Background />
      <Navigation />
      <HeaderContent />
    </header>
  )
}
