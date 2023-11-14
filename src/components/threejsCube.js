import * as THREE from 'three';

import React, { useEffect, useRef, useState } from 'react';

const CubeAnimation = () => {
  const textIndexRef = useRef(0);
  const texts = ['Data: Welcome', 'Previous Hash: Website', 'Current Hash: Front End Dev'];
  const TEXT_CHANGE_THRESHOLD = 0.7;
  
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
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

    let isTextVisible = true;
    let textMaterial = new THREE.MeshBasicMaterial(); 

    const updateText = () => {
      const frontFaceNormal = new THREE.Vector3(0, 0, 1);
      const cameraDirection = new THREE.Vector3(0, 0, -1);
      cameraDirection.applyQuaternion(camera.quaternion);
      const dotProduct = frontFaceNormal.dot(cameraDirection);

      if (isTextVisible && dotProduct < TEXT_CHANGE_THRESHOLD) {
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        const textTexture = createTextTexture(texts[textIndexRef.current]);
        textMaterial.map = textTexture;
        materials[4].map = textTexture;
        isTextVisible = false;
      } else if (!isTextVisible && dotProduct >= TEXT_CHANGE_THRESHOLD) {
        textMaterial.map = null; 
        isTextVisible = true;
      }
    };


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

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default CubeAnimation;
