import React from 'react'
import styles from './styles.module.scss'

export const Facebook = () => {
  return (
    <svg className={styles.svg} viewBox='0 0 39 39' xmlns='http://www.w3.org/2000/svg'>
      <rect className={styles.rect} x='0.5' y='0.5' />
      <path
        className={styles.path1}
        d='M20.397 27.9969V19.8009H23.162L23.573 16.5919H20.397V14.5479C20.397 13.6219 20.655 12.9879 21.984 12.9879H23.668V10.1269C22.8487 10.0391 22.0251 9.99672 21.201 9.99993C18.757 9.99993 17.079 11.4919 17.079 14.2309V16.5859H14.332V19.7949H17.085V27.9969H20.397Z'
      />
    </svg>
  )
}
