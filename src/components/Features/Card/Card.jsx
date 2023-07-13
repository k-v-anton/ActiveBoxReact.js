import React from 'react'
import styles from './styles.module.scss'

export const Card = (props) => {
  const { icon: Icon, title, description } = props

  return (
    <div className={styles.container}>
      {/* <IconCustomized /> */}
      <Icon />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
