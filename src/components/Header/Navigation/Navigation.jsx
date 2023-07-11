import React from 'react'
import { Logo } from '_/images/svg/Logo'
import { NavigationLink } from '../NavigationLink'
import { navigationList } from './Navigation.Data'
import styles from './styles.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.navigation}>
        {navigationList.map((el) => (
          <NavigationLink key={el.id} name={el.name} />
        ))}
      </div>
    </div>
  )
}
