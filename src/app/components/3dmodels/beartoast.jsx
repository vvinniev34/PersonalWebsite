import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber/hooks';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Canvas } from 'react-three-fiber';

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'nekomori_toast_bear.glb');
  return <primitive object={gltf.scene} />;
};

const ModelViewer = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const group = useRef();

  return <Canvas><primitive object={gltf.scene} ref={group} /></Canvas>;
};

export default ModelViewer;