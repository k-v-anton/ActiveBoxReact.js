import React from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { hamburgerAction } from '../../../../store/hamburgerReducer'

export const Hamburger = () => {
  const hamburgerState =useSelector(state => state.hamburger)
  const dispatch = useDispatch()
  
  const handleHamburgerClick = () => {
    dispatch(hamburgerAction(!hamburgerState))
  }

  return (
    <div className={styles.hamburger} onClick={handleHamburgerClick}>
      <span className={hamburgerState ? `${styles.line} ${styles.active}` : styles.line}></span>
    </div>
  )
}
