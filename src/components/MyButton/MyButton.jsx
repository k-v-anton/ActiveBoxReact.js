import React from 'react'
import styles from './styles.module.scss'

export const MyButton = (props) => {
  const {name} = props
  return (
    <button className={styles.btn}>{name}</button>
  )
}
