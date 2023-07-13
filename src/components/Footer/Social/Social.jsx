import React from 'react'
import { Facebook } from '../../../images/svg/social/Facebook'
import { Linkedin } from '../../../images/svg/social/Linkedin'
import { Twitter } from '../../../images/svg/social/Twitter'
import styles from './styles.module.scss'

export const Social = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Share with Love</h3>
      <div className={styles.content}>
        <Facebook />
        <Twitter />
        <Linkedin />
      </div>
    </div>
  )
}
