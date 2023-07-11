import React from 'react'
import styles from './styles.module.scss'
import { Card } from './Card'
import { featuresData } from './Features.Data'

export const Features = () => {
  return (
    <section className={styles.container}>
      {featuresData.map(card => <Card key={card.id} {...card}/>)}
     
    </section>
  )
}
