"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import styles from './carousel.module.css'

// larger the value, darker the sides
const TWEEN_FACTOR = 2.8

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const Carousel = (props) => {
    const { projectList } = props;
    const SLIDES = Array.from(Array(projectList.length).keys())

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [tweenValues, setTweenValues] = useState([])

    const onScroll = useCallback(() => {
        if (!emblaApi) return
    
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
    
        const tweenStyles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress
    
            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target()
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
                    }
                })
            }
            const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
            return numberWithinRange(tweenValue, 0, 1)
        })
        setTweenValues(tweenStyles)
    }, [emblaApi, setTweenValues])

    useEffect(() => {
        if (!emblaApi) return
        onScroll()
        emblaApi.on('scroll', () => {
            flushSync(() => onScroll())
        })
        emblaApi.on('reInit', onScroll)
      }, [emblaApi, onScroll])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {SLIDES.map((index) => (
                <div
                  className={styles.embla__slide}
                  key={index}
                  style={{
                    ...(tweenValues.length && { opacity: tweenValues[index] })
                  }}
                >
                  <div className={styles.embla__slide__number}>
                    <span>{index + 1}</span>
                  </div>
                  {projectList[index]}
                </div>
              ))}
            </div>
          </div>
          <button className={styles.embla__prev} onClick={scrollPrev}>Prev</button>
          <button className={styles.embla__next} onClick={scrollNext}>Next</button>
        </div>
      )
};

export default Carousel;
