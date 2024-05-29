import React from "react";
import Contact from "../contact/contact";
import styles from "./footer.module.css";

export default function Footer(){
    return (
        <div 
            className="w-[100%] bg-darkbrown" 
            style={{ position:"relative", zIndex:"50"}}
        >
            <div className='sidebarLeftPadding sidebarRightPadding pb-5' style={{ paddingTop:'3rem' }}>
                <Contact/>
            </div>
            <div 
                className='font-serif text-white text-center text-md md:text-lg p-5' 
                style={{ paddingBottom:'1.25rem', background: 'rgba(0, 0, 0, 0.2)' }}
            >
                <p>Thanks for checking out my portfolio!</p>
                <p>Designed in <a className={styles.textHover} href='https://figma.com' target="_blank" rel="noopener noreferrer">Figma</a>, coded in <a className={styles.textHover} href='https://code.visualstudio.com' target="_blank" rel="noopener noreferrer">Visual Studio Code</a>, built using <a className={styles.textHover} href='https://nextjs.org' target="_blank" rel="noopener noreferrer">Next.js</a> & <a className={styles.textHover} href='https://tailwindcss.com' target="_blank" rel="noopener noreferrer">Tailwind CSS</a>, deployed with <a className={styles.textHover} href='https://vercel.com' target="_blank" rel="noopener noreferrer">Vercel</a>, and most importantly, built by me! 😊</p>
            </div>
        </div>
    );
}
