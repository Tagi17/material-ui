import * as THREE from 'three';

import React, { useEffect, useRef, useState } from "react";

const ThreeJSNodes = () => {
  const canvasRef = useRef(null);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set up the nodes
    const nodeGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.2,
      transparent: true,
    });

    const nodePositions = [
      [1, 1, -5],
      [-1, -1, -5],
      [-1, 1, -5],
      [1, -1, -5],
    ];

    const nodes = nodePositions.map((position) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(position[0], position[1], position[2]);
      node.position.z = -10;
      return node;
    });

    // Add the nodes to the scene
    nodes.forEach((node) => {
      scene.add(node);
    });

    setNodes(nodes);

    // Animate the nodes
    const animateNodes = () => {
      nodes.forEach((node) => {
        node.position.y += Math.sin(Date.now() * 0.001) * 0.01;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animateNodes);
    };

    animateNodes();

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeJSNodes;
