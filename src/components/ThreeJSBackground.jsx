import * as THREE from 'three';

import React, { useEffect, useRef } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function MatrixBackground(props) {
  const containerRef = useRef(null);
  const { canvasRef } = props;

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Set up the matrix lines
    const matrixLines = [];
    const numMatrixLines = 50;
    const matrixLineSpacing = 2;
    const matrixLineWidth = 0.1;
    const matrixLineHeight = numMatrixLines * matrixLineSpacing;
    const matrixLineGeometry = new THREE.BoxGeometry(matrixLineWidth, matrixLineHeight, matrixLineWidth);
    const matrixLineMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    for (let i = 0; i < numMatrixLines; i++) {
      const matrixLine = new THREE.Mesh(matrixLineGeometry, matrixLineMaterial);
      matrixLine.position.set(
        Math.random() * 20 - 10,
        -(matrixLineHeight / 2) + (i * matrixLineSpacing),
        Math.random() * 20 - 10
      );
      scene.add(matrixLine);
      matrixLines.push(matrixLine);
    }

    // Animate the matrix lines
    const animate = () => {
      requestAnimationFrame(animate);
      matrixLines.forEach(matrixLine => {
        matrixLine.position.y += 0.1;
        if (matrixLine.position.y > (matrixLineHeight / 2)) {
          matrixLine.position.y = -(matrixLineHeight / 2);
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    // Set up the camera position
    camera.position.z = 5;

    // Clean up the scene when the component unmounts
    return () => {
      const container = containerRef.current;
      const rendererElement = renderer.domElement;
      if (container && rendererElement) {
        scene.remove(...matrixLines);
        matrixLineGeometry.dispose();
        matrixLineMaterial.dispose();
        renderer.dispose();
        container.removeChild(rendererElement);
      };
    }
    }, [containerRef, canvasRef]);

  return (
    <ErrorBoundary>
      <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
    </ErrorBoundary>
  );
}

export default MatrixBackground;