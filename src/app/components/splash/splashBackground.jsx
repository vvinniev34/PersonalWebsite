// "use client"
// import { useState } from 'react';
// import Image from 'next/image';
import SplashBackgroundSVG from "./splashBackgroundSVG"

export default function SplashBackground() {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

  return (
    <>
        <SplashBackgroundSVG className="absolute h-full w-full"/>
        {/* <Image
            src="/oceanunderwatersurface.png"
            alt="ocean underwater surface"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            // onLoad={handleImageLoad}
            // className={`transition-opacity duration-200 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            className="hidden sm:block"
        /> */}
    </>
  );
}
