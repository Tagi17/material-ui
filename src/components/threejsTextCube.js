import "./style.css"

import * as THREE from 'three';

import React, { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles.js';
import useMediaQuery from '@mui/material/useMediaQuery';

const CubeAnimationNext = () => {
    const containerRef = useRef(null);
    const textIndexRef = useRef(0);
    const texts = ['Data: Welcome', 'Previous Hash: Website', 'Current Hash: Front End Dev'];
    const TEXT_CHANGE_THRESHOLD = 0.2

    const createTextTexture = (text) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const fontSize = 36;
        const textColor = 'white';
        canvas.width = 512;
        canvas.height = 256;

        context.fillStyle = textColor;
        context.font = `${fontSize}px Arial`;
        const textWidth = context.measureText(text).width;
        context.fillText(text, (canvas.width - textWidth) / 2, canvas.height / 2 + fontSize / 2);
        return new THREE.CanvasTexture(canvas);
    };

    const [isTextVisible, setTextVisible] = useState(true);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);

        const materials = [
            new THREE.MeshBasicMaterial({ color: 0x111111 }),
            new THREE.MeshBasicMaterial({ color: 0x222222 }), // Left
            new THREE.MeshBasicMaterial({ color: 0x333333 }), // Top
            new THREE.MeshBasicMaterial({ color: 0x444444 }), // Bottom
            new THREE.MeshBasicMaterial({ color: 0x555555 }), // Front
            new THREE.MeshBasicMaterial({ color: 0x666666 }) // Back
        ];
        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        cube.scale.set(2, 2, 2);
        camera.position.z = 5;

        const resizeRenderer = () => {
            const container = containerRef.current;
            const width = 700;
            const height = 400;
            // const width = container.offsetWidth;
            // const height = container.offsetHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        // const updateText = () => {
        //     const frontFaceNormal = new THREE.Vector3(0, 0, 1);
        //     const cameraDirection = new THREE.Vector3(0, 0, -1);
        //     cameraDirection.applyQuaternion(camera.quaternion);
        //     const dotProduct = frontFaceNormal.dot(cameraDirection);

        //     if (isTextVisible && dotProduct < TEXT_CHANGE_THRESHOLD) {
        //         console.log("Changing Text...");
        //         textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        //         const textTexture = createTextTexture(texts[textIndexRef.current]);
        //         materials[0].map = textTexture; //text on first side 
        //         setTextVisible(false);
        //     } else if (!isTextVisible && dotProduct >= TEXT_CHANGE_THRESHOLD) {
        //         console.log("Text Visible...");
        //         setTextVisible(true);
        //     }
        // };
        const updateText = () => {
            const frontFaceNormal = new THREE.Vector3(0, 0, 1);
            const cameraDirection = new THREE.Vector3(0, 0, -1);
            cameraDirection.applyQuaternion(camera.quaternion);
            const dotProduct = frontFaceNormal.dot(cameraDirection);
        
            // Only update the text if it hasn't been changed in the current view
            if (!isTextVisible) {
                if (dotProduct >= TEXT_CHANGE_THRESHOLD) {
                    setTextVisible(true);
                }
            } else if (dotProduct < TEXT_CHANGE_THRESHOLD) {
                console.log("Changing Text...");
                textIndexRef.current = (textIndexRef.current + 1) % texts.length;
                const textTexture = createTextTexture(texts[textIndexRef.current]);
                materials[0].map = textTexture; //text on first side
                setTextVisible(false);
            }
        };
        
        // const updateText = () => {
        //     // Calculate the distance between the camera and the cube
        //     const distance = camera.position.distanceTo(cube.position);
          
        //     if (isTextVisible && distance < TEXT_CHANGE_THRESHOLD) {
        //       textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        //       const textTexture = createTextTexture(texts[textIndexRef.current]);
        //       console.log(textTexture);

        //       materials[0].map = textTexture;
        //       setTextVisible(false);
        //     } else if (!isTextVisible && distance >= TEXT_CHANGE_THRESHOLD) {
        //       setTextVisible(true);
        //     }
        //   };
        const rotateCube = () => {
            cube.rotation.x += 0.002;
            cube.rotation.y += 0.002;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            rotateCube();
            updateText();
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', resizeRenderer);

        return () => {
            window.removeEventListener('resize', resizeRenderer); // Remove the event listener
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
          }
        `}
        </style>
            <Box
                ref={containerRef}
                className="canvas-container"
                sx={{
                    //   position: 'relative',
                    //   width: '80%',
                    // height: '40%',
                    // top: '10vh', 
                    // left: '10px', 
                }}
            />
        </ThemeProvider>
    );
};

export default CubeAnimationNext;
