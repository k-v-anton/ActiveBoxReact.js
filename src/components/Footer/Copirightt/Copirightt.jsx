import React from 'react'
import styles from './styles.module.scss'

export const Copirightt = (props) => {
  const { copirightt, madeMassage, company } = props
  return (
    <div className={styles.container}>
      <p className={styles.copirightt}>{copirightt}</p>
      <p className={styles.copirightt}>
        {madeMassage}
        <span className={styles.copirighttBolt}>{company}</span>
      </p>
    </div>
  )
}
