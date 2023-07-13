import React, { useContext } from 'react'
import { SliderContext } from '../sliderContext'
import styles from './styles.module.scss'

export const Content = () => {
  const { sliderData, setAutoSlider, activeIndex } = useContext(SliderContext)
  const slide = sliderData[activeIndex]

  const handleClickSlider = () => {
    setAutoSlider(false)
  }

  return (
    <div className={styles.slide} onClick={handleClickSlider}>
      <img className={styles.bord} src={slide.img} alt='' />
      <div className={styles.description}>
        <div className={styles.text}>
          {slide.text}
        </div>
        <div className={styles.signature}>
          {slide.signature}
        </div>
      </div>
    </div>
  )
}
