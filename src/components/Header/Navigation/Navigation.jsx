import { Logo } from '_/images/svg/Logo'
import React from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { NavigationLink } from '../NavigationLink'
import { Hamburger } from './Hamburger'
import { navigationList } from './Navigation.Data'
import styles from './styles.module.scss'

export const Navigation = () => {
  const { width } = useWindowSize()

  const navigationStyles = () => {
    if (width <= 1024 && hamburgerState) {
      return `${styles.navigationMobile} ${styles.navigationMobileActive}`
    } else if (width <= 1024) {
      return styles.navigationMobile
    } else {
      return styles.navigation
    }
  }

  return (
    <div className={styles.container}>
      <Logo />
      <div className={navigationStyles()}>
        {navigationList.map((el) => (
          <NavigationLink key={el.id} name={el.name} />
        ))}
      </div>
      {width <= 1024 && <Hamburger />}
    </div>
  )
}
