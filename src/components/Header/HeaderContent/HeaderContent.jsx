import React from 'react'
import { MyButton } from '../../MyButton'
import styles from './styles.module.scss'

export const HeaderContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Your Favorite One Page Multi Purpose Template</div>
      <div className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl
        consectetur et.
      </div>
        <MyButton name='Find Out More' />
    </div>
  )
}
