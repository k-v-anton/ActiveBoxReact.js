import React from 'react'
import { Copirightt } from './Copirightt'
import { footerData } from './Footer.Data'
import { Location } from './Location'
import styles from './styles.module.scss'
import { Social } from './Social'
import { ActiveBox } from './ActiveBox'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Location/>
        <Social/>
        <ActiveBox/>
      </div>

      <Copirightt {...footerData.copiright} />
    </footer>
  )
}
