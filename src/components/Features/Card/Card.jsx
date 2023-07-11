import React from 'react'
import styles from './styles.module.scss'
import { IconCustomized } from '../../../images/svg/icons/IconCustomized'

export const Card = (props) => {
  const { icon, title, description } = props
  console.log(JSON.stringify(icon));
  return (
    <div className={styles.container}>
      <IconCustomized />
      {}    
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
