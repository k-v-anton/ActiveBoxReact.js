import React, { useState } from 'react'
import styles from './styles.module.scss'

export const Hamburger = () => {
  const [hamburgerState, setHamburgerState] = useState(false)
  const handleHamburgerClick = () => {
    setHamburgerState(!hamburgerState)
  }
  return (
    <div className={styles.hamburger} onClick={handleHamburgerClick}>
      <span className={hamburgerState ? `${styles.line} ${styles.active}` : styles.line}></span>
    </div>
  )
}
