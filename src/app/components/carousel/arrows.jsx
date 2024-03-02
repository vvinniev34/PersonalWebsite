import React from 'react'
import styles from './carousel.module.css'

export const PrevButton = (props) => {
    const { children, ...restProps } = props
  
    return (
        <button
            className={styles.embla__button}
            type="button"
            {...restProps}
        >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
            {children}
        </button>
    )
}

export const NextButton = (props) => {
    const { children, ...restProps } = props
  
    return (
        <button
            className={styles.embla__button}
            type="button"
            {...restProps}
        >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            {children}
        </button>
    )
}
  