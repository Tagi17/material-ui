import * as THREE from 'three';

import React, { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles.js'; // Import the theme from your styles.js file
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Chain(){
        const sceneRef = useRef();
      
        useEffect(() => {
          // Create a scene, camera, and renderer
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer();
          renderer.setSize(window.innerWidth, window.innerHeight);
          sceneRef.current.appendChild(renderer.domElement);
      
          // Create a geometry (square blocks)
          const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
          const blockMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
      
          // Create columns of blocks
          const numColumns = 10;
          const columnSpacing = 2;
          const blockSpacing = 0.5;
          const columnOffset = -numColumns * columnSpacing / 2;
      
          for (let i = 0; i < numColumns; i++) {
            for (let j = 0; j < numColumns; j++) {
              const block = new THREE.Mesh(blockGeometry, blockMaterial);
              block.position.set(i * columnSpacing + columnOffset, j * blockSpacing, 0);
              scene.add(block);
            }
          }
      
          // Set camera position and orientation
          camera.position.z = 5;
      
          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
      
            // Rotate the entire scene
            scene.rotation.x += 0.01;
            scene.rotation.y += 0.01;
      
            // Move the columns downwards
            scene.position.y -= 0.02;
      
            renderer.render(scene, camera);
          };
      
          // Start the animation loop
          animate();
        }, []);
      
        return <div ref={sceneRef} />;
      }
      
      export default Chain;