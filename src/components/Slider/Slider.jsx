import React, { useEffect, useState } from 'react'
import { Content } from './Content'
import { Dots } from './Dots'
import { sliderData } from './Slider.Data'
import { SliderContext } from './sliderContext'
import styles from './styles.module.scss'

export const Slider = () => {
  const [autoSlider, setAutoSlider] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (autoSlider) {
      const interval = setInterval(() => {
        if (activeIndex + 1 < sliderData.length) {
          setActiveIndex(activeIndex + 1)
        } else {
          setActiveIndex(0)
        }
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [activeIndex, autoSlider])

  return (
    <SliderContext.Provider value={{ sliderData, setAutoSlider, activeIndex, setActiveIndex }}>
      <section className={styles.container}>
        <Content />
        <Dots />
      </section>
    </SliderContext.Provider>
  )
}
