import React from 'react'
import { Employee } from './Employee'
import { ourTeamData } from './OurTeam.Data'
import styles from './styles.module.scss'

export const OurTeam = () => {
  return (
    <section className={styles.container}>
      {ourTeamData.map((employee) => (
        <Employee key={employee.id} {...employee} />
      ))}
    </section>
  )
}
