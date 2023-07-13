import React from 'react'
import styles from './styles.module.scss'

export const Work = (props) => {
  const { img, projectName, description } = props

  return (
    <div className={styles.container} >
      <img className={styles.work} src={img} alt='' />

      <div className={styles.wrapper}>
        <h3 className={styles.projectName}>{projectName}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
