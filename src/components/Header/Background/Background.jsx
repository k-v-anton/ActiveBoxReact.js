import React from 'react'
import img from '_/images/header/headerbg.png'
import styles from './styles.module.scss'

export const Background = () => {
  return (
    <div className={styles.background}>
      <img className={styles.imgbg} src={img} alt='' />
      <span className={styles.filter} />
    </div>
  )
}
