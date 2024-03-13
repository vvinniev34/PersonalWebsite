import React from "react";
import Image from "next/image";
import TertiaryHeader from "../headers/tertiaryheader";
import styles from './featuredProject.module.css'

export default function FeaturedProject () {
    return (
        <div className={`rounded-md overflow-hidden ${styles.projectWrapper}`}>
            <div className={`w-full h-full ${styles.projectImage}`}>
                <Image 
                    src="/about/food.jpg"
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
                    title="LAYOFFCRUNCH: layoffcrunch.io"
                    description={
                        <div className="text-gray-600">
                            <p className="">Keeping track of all major tech layoffs since 2020<br/></p>
                            <div style={{ display: 'flex', paddingTop: '1rem', flexDirection: 'row' }}>
                                <div style={{ width:'50%' }}>
                                    <p className="">Next.js<br/>Node.js<br/>Express.js<br/>MongoDB<br/></p>
                                </div>
                                <div style={{ width:'50%' }}>
                                    <p className="">Tailwind CSS<br/>JavaScript<br/>HTML</p>
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