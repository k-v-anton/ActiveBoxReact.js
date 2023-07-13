import React from 'react'
import { workData } from './Works.Data'
import { Work } from './Work/Work'
import styles from './styles.module.scss'

export const Works = () => {
  return (
    <section className={styles.container}>
      {workData.map(work => <Work key={work.id} {...work}/>)}
    </section>
  )
}
