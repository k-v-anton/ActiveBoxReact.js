import { Logo } from '_/images/svg/Logo'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { hamburgerAction } from '../../../store/hamburgerReducer'
import { NavigationLink } from '../NavigationLink'
import { Hamburger } from './Hamburger'
import { navigationList } from './Navigation.Data'
import styles from './styles.module.scss'

export const Navigation = () => {
  const { width } = useWindowSize()
  const hamburgerState = useSelector((state) => state.hamburger)
  const dispatch = useDispatch()

  const navigationStyles = () => {
    if (width <= 1024 && hamburgerState) {
      return `${styles.navigationMobile} ${styles.navigationMobileActive}`
    } else if (width <= 1024) {
      return styles.navigationMobile
    } else {
      return styles.navigation
    }
  }

  const handleClickLogo = () => {
    dispatch(hamburgerAction(false))
  }

  return (
    <div className={styles.container}>
      <div onClick={handleClickLogo}>
        <Logo />
      </div>
      <div className={navigationStyles()}>
        {navigationList.map((el) => (
          <NavigationLink key={el.id} name={el.name} />
        ))}
      </div>
      {width <= 1024 && <Hamburger />}
    </div>
  )
}
