// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls, Center } from "@react-three/drei";

// function MeshComponent() {
//   const fileUrl = "computer_terranium/scene.gltf"
//   const mesh = useRef();
//   const gltf = useLoader(GLTFLoader, fileUrl);

//   useFrame(() => {
//     const rotationFactor = 0.005;
//     mesh.current.rotation.y = scrollY * rotationFactor;
//   });

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
//       <Canvas className='h-[100%]' style={{height:"14rem"}} camera={{ position: [0, 3.5, 5] }}>
//         <Center>
//           <OrbitControls 
//             enablePan={false}
//             minDistance={2}
//             maxDistance={3}
//           />
//           <ambientLight />
//           <MeshComponent />
//         </Center>
//       </Canvas>
//     </div>
//   );
// }
// export default BearToast;