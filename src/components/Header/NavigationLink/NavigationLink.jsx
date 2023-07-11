import React from 'react'
import styles from './styles.module.scss'

export const NavigationLink = (props) => {
  const {name} = props
  return (
    <button className={styles.link}>{name}</button>
  )
}
