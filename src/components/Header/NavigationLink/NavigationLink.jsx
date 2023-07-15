import React from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { hamburgerAction } from '../../../store/hamburgerReducer'

export const NavigationLink = (props) => {
  const {name} = props
  const dispatch = useDispatch()
  const handleClickLink = () => {
    dispatch(hamburgerAction(false))
  }
  return (
    <button onClick={handleClickLink} className={styles.link}>{name}</button>
  )
}
