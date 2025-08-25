import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// This component is for the 3D Workspace Zone.
function WorkspaceZone({ navigate }) {
  // useRef is used to get a direct reference to the <canvas> DOM element.
  const canvasRef = useRef(null);

  // useEffect runs after the component mounts. This is the perfect place
  // to initialize the Three.js scene, as it ensures the <canvas> element exists.
  useEffect(() => {
    // --- Three.js Scene Setup ---
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Add a floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Add a simple avatar placeholder
    const avatarGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const avatarMaterial = new THREE.MeshStandardMaterial({ color: 0x6366f1 });
    const avatar = new THREE.Mesh(avatarGeometry, avatarMaterial);
    avatar.position.set(0, 0.5, 0);
    scene.add(avatar);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      avatar.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function: This runs when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      // You can also dispose of Three.js objects here to free up memory
    };
  }, []); // The empty array ensures this effect runs only once.

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('dashboard')} style={{ cursor: 'pointer' }}>
            <h2>Hackifyy</h2>
          </div>
          <div className="nav-breadcrumb">
            <span>Workspace Zone</span>
          </div>
        </div>
      </nav>
      
      {/* The 3D scene will be rendered on this canvas element */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <canvas ref={canvasRef}></canvas>
      </div>

      {/* UI elements can be overlaid on top of the canvas */}
      <div style={{ position: 'absolute', top: '80px', left: '2rem', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '8px' }}>
        <h3>Workspace Active</h3>
        <p>Use your mouse to look around!</p>
      </div>
    </>
  );
}

export default WorkspaceZone;
