import React from 'react'
import { MyButton } from '../MyButton'
import styles from './styles.module.scss'

export const Download = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>Are You Ready to Start? Download Now For Free!</div>
      <div className={styles.subtitle}>Fusce dapibus, tellus ac cursus commodo</div>
      <MyButton name={'Download here'} />
    </section>
  )
}
