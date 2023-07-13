import React, { useContext } from 'react'
import { SliderContext } from '../sliderContext'
import styles from './styles.module.scss'

export const Dots = () => {
  const { sliderData, activeIndex, setActiveIndex } = useContext(SliderContext)

  const handleClickDot = (e) => {
    e.preventDefault()
    setActiveIndex(+e.target.textContent)
  }
  return (
    <div className={styles.dots}>
      {sliderData.map((dot, index) => (
        <span
          key={dot.id}
          onClick={handleClickDot}
          className={sliderData[activeIndex] === dot ? `${styles.dot} ${styles.active}` : styles.dot}
        >
          {index}
        </span>
      ))}
    </div>
  )
}
