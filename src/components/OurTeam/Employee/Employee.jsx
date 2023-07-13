import React from 'react'
import styles from './styles.module.scss'
import {Facebook} from '../../../images/svg/social/Facebook'
import {Linkedin} from '../../../images/svg/social/Linkedin'
import {Twitter} from '../../../images/svg/social/Twitter'

export const Employee = (props) => {
  const {img, firstName, lastName, jobTitle, activity} = props

  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt="" />
      <h3 className={styles.title}>{firstName} {lastName}</h3>
      <p className={styles.jobTitle}>{jobTitle}</p>
      <p className={styles.activity}>{activity}</p>
      <div className={styles.social}>
        <Facebook/>
        <Linkedin/>
        <Twitter/>
      </div>
    </div>
  )
}
