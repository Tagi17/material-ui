import * as THREE from 'three';

import React, { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles.js'; // Import the theme from your styles.js file
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ThreeScene() {
  const containerRef = useRef(null);
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  useEffect(() => {
    console.log("containerRef.current:", containerRef.current);
    // Set up the scene
    const scene = new THREE.Scene();
    //const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 100);
    //camera.position.z = 100;
    //camera.position.set(0, 0, 5);
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10); // Adjusted the near and far values
    camera.position.set(0, 0, 10); // Adjusted the camera position
    

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    containerRef.current.appendChild(renderer.domElement);

    // Set up the sphere
    const geometry = new THREE.SphereGeometry(3, 20, 32);
    const material = new THREE.MeshBasicMaterial({ wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(0, 1, 0);  // Move the sphere up  0, 1, 0
    scene.add(sphere);

    // Set up the lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const resizeRenderer = () => {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resizeRenderer();

    // Animate the sphere
    const animate = () => {
      console.log("animate");
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', resizeRenderer);

    // Clean up the scene when the component unmounts
    return () => {
      const container = containerRef.current;
      const rendererElement = renderer.domElement;
      if (container && rendererElement) {
        window.removeEventListener('resize', resizeRenderer);
        scene.remove(sphere);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        container.removeChild(rendererElement);
      }
    };
  }, []);

  const aspectRatio = isXs ? 1 : 2;

  return (
    <ThemeProvider theme={theme}>
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          width: '50%',
          height: '50%',
          top: '50px', // Adjust the top position as needed
          left: '50px', // Adjust the left position as needed
        }}
      />
    </ThemeProvider>
  );
}

export default ThreeScene;
