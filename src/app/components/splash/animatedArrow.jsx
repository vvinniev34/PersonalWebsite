"use client"

export default function AnimatedArrow(){
    const scrollDown = function () {
        const element = document.getElementById("about")
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <div 
            style={{width:"3rem", position:"absolute", marginTop:"4rem", cursor:"pointer"}}
            onClick={() => scrollDown()}
        >
            <svg 
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" 
                fill-rule="evenodd" 
                clip-rule="evenodd"
            >
                <defs>  
                    <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                        <stop offset="0%" stop-color="#7A5FFF">
                            <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="2s" repeatCount="indefinite"></animate>
                        </stop>
                        <stop offset="100%" stop-color="#01FF89">
                            <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="2s" repeatCount="indefinite"></animate>
                        </stop>
                    </linearGradient> 
                </defs>

                <g>
                    <path fill="url('#logo-gradient')" d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z"/>
                </g>
            </svg>
        </div>
    );
}

