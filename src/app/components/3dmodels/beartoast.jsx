// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "@react-three/drei";
// import { Mesh } from "three";


// function MeshComponent() {
//   // const fileUrl = "nekomori_toast_bear/scene.gltf"
//   const fileUrl = "computer_terranium/scene.gltf"
//   const mesh = useRef();
//   const gltf = useLoader(GLTFLoader, fileUrl);

//   useFrame(() => {
//     const rotationFactor = 0.001;
//     mesh.current.rotation.y = scrollY * rotationFactor;
//   });

//   const scrollRef = useRef(0);
//   const [scrollY, setScrollY] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <mesh ref={mesh}>
//       <primitive object={gltf.scene} />
//     </mesh>
//   );
// }

// export function BearToast() {
//   return (
//     <div className='flex justify-center items-center h-[100%] w-full'>
//       <Canvas className='h-[100%]'>
//           <OrbitControls 
//             enableZoom={false}
//             minDistance={0}
//           />
//           <ambientLight />
//           <MeshComponent />
//       </Canvas>
//     </div>
//   );
// }
// export default BearToast;