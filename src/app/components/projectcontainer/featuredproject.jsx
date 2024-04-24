import React from "react";
import Image from "next/image";
import TertiaryHeader from "../headers/tertiaryheader";
import styles from './featuredProject.module.css'

export default function FeaturedProject () {
    const linkedin = "https://www.layoffcrunch.io"
    function handleLayoffCrunchNav() {
        window.open(linkedin, '_blank');
    }

    return (
        <div className={`rounded-md overflow-hidden ${styles.projectWrapper} cursor-pointer`} onClick={handleLayoffCrunchNav}>
            <div className={`w-full h-full ${styles.projectImage}`}>
                <Image 
                    src="/projects/layoffcrunch_frontpage.png"
                    alt="layoffcrunch UI"
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="center"
                    style={{ position:'relative' }}
                />
            </div>
            <div className={`${styles.projectDescriptionDiv} rounded-md`}>
                <div style={{ width:'80%' }}>
                <TertiaryHeader 
                    title={
                        <div className="flex items-center justify-center">
                            LAYOFFCRUNCH: layoffcrunch.io
                            <div className={`w-8 h-8 ${styles.arrow}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 25 25">
                                    <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
                                </svg>
                            </div>
                        </div>
                    }
                    description={
                        <div className="text-gray-600">
                            <p className="">Keeping track of all major tech layoffs since 2020<br/></p>
                            <div style={{ display: 'flex', paddingTop: '1rem', flexDirection: 'row' }}>
                                <div style={{ width:'50%' }}>
                                    <p className="">Next.js<br/>Node.js<br/>Express.js<br/>MongoDB<br/></p>
                                </div>
                                <div style={{ width:'50%' }}>
                                    <p className="">Tailwind CSS<br/>JavaScript<br/>HTML<br/>AWS</p>
                                </div>
                            </div>
                        </div>
                    }
                    centered={true}
                    color={'rgb(75 85 99)'}
                />
                </div>
            </div>
        </div>
    );
}