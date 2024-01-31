import React from 'react'
import Contact from '../contact/contact'

export default function Footer(){
    return (
        <div className='w-[100%] bg-darkbrown' style={{padding: "3rem", paddingLeft: "15%", paddingRight: "15%"}}>
            <Contact></Contact>
        </div>
    );
}