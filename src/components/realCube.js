import "./style.css"

import * as THREE from 'three';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';

import { Text } from '@react-three/drei';

const Cube = () => {
  const cubeRef = useRef();
  const [visibleFaceText, setVisibleFaceText] = useState('');
  const { camera } = useThree();

  const texts = {
    0: "data: welcome",       // Front
    1: "previous hash: website", // Back
    2: "current hash: front end dev",  // Top
  };

  useFrame(() => {
    // Rotate the cube
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;

    // Calculate the visible face
    let maxDot = -Infinity;
    let index = -1;

    for (let i = 0; i < 3; i++) {
      const face = cubeRef.current.geometry.faces[i];
      const normal = face.normal.clone();
      normal.applyQuaternion(cubeRef.current.quaternion);

      const dot = normal.dot(camera.position.clone().normalize());
      if (dot > maxDot) {
        maxDot = dot;
        index = i;
      }
    }

    setVisibleFaceText(texts[Math.floor(index / 2)]);
  });

  return (
    <mesh ref={cubeRef} scale={[2, 2, 2]}>
      {/* Cube geometry */}
      <boxGeometry />
      {/* Text */}
      <Text position={[0, 0, 1.1]} fontSize={0.2} color="black">
        {visibleFaceText}
      </Text>
    </mesh>
  );
};

const RealCube = () => {
  return (
    <Canvas>
      <ambientLight />
        <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default RealCube;
