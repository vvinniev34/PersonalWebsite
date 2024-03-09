import React from 'react'
import Contact from '../contact/contact'
// import styles from "./footer.module.css"

export default function Footer(){
    return (
        <div 
            className="w-[100%] bg-darkbrown" 
            style={{ position:"relative", zIndex:"50"}}
        >
            <div className='sidebarLeftPadding pb-5' style={{ paddingTop:'3rem' }}>
                <Contact></Contact>
            </div>
            <div 
                className='font-serif text-center text-md md:text-lg p-5' 
                style={{ paddingBottom:'1.25rem', background: 'rgba(0, 0, 0, 0.2)' }}
            >
                <p>Thanks for checking out my portfolio!</p>
                <p>Designed in <span className='artifactWord'>Figma</span>, coded in <span className='artifactWord'>Visual Studio Code</span>, built using <span className='artifactWord'>Next.js</span> & <span className='artifactWord'>Tailwind CSS</span>, deployed with <span className='artifactWord'>Vercel</span>, and most importantly, built by me! 😊</p>
            </div>
        </div>
    );
}