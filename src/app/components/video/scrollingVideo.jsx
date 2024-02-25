// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';

// const VideoPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const videoRef = useRef(null);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5 // Adjust threshold as needed
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (inView && !isPlaying) {
//         setIsPlaying(true);
//       } else if (!inView && isPlaying) {
//         setIsPlaying(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [inView, isPlaying]);

//   useEffect(() => {
//     const handleScrollPause = () => {
//       if (isPlaying) {
//         setIsPlaying(false);
//       }
//     };

//     window.addEventListener('scroll', handleScrollPause);
//     return () => window.removeEventListener('scroll', handleScrollPause);
//   }, [isPlaying]);

//   useEffect(() => {
//     const handleScrollRewind = () => {
//       if (!isPlaying && progress > 0) {
//         setProgress(0);
//         if (videoRef.current) {
//           videoRef.current.currentTime = 0;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScrollRewind);
//     return () => window.removeEventListener('scroll', handleScrollRewind);
//   }, [isPlaying, progress]);

//   const handleProgress = () => {
//     if (videoRef.current) {
//       const currentTime = videoRef.current.currentTime;
//       const duration = videoRef.current.duration;
//       const newProgress = currentTime / duration;
//       setProgress(newProgress);
//     }
//   };

//   return (
//     <div ref={ref}>
//       <video
//         ref={videoRef}
//         onTimeUpdate={handleProgress}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//         controls
//       >
//         <img src="squidInDeep.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;
