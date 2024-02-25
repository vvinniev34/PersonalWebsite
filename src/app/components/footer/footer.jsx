import React from 'react'
import Contact from '../contact/contact'
import styles from "./footer.module.css"

export default function Footer(){
    return (
        <div 
            className={`w-[100%] bg-darkbrown ${styles.paddingFooter}`} 
            style={{paddingTop:"3rem", paddingBottom:"3rem", position:"relative"}}
        >
            <Contact></Contact>
        </div>
    );
}