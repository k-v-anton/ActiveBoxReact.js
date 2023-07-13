import React from 'react'
import styles from './styles.module.scss'

export const ActiveBox = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>About ActiveBoxe</h3>
      <p className={styles.content}>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
    </div>
  )
}
