'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

// Model URL 
const MODEL_URL = "https://1x3dlmcdtl30e8ka.public.blob.vercel-storage.com/gaming_desktop_pc-NlvFCIGyKfdoMKNX93il1IvWh43xUn.glb";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

function Model() {
  const { scene } = useGLTF(MODEL_URL) as GLTFResult;
  const modelRef = useRef<THREE.Object3D>();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust rotation speed here
    }
  });

  // Adjust scale and position for better visibility
  return <primitive ref={modelRef} object={scene} scale={0.5} position={[0, 1.5, 0]} />;
}

function Loader() {
  return (
    <Html center>
      <div className="text-primary text-xl">
        Loading 3D Model...
      </div>
    </Html>
  );
}

const Model3D = () => {
  return (
    <div className="w-full h-screen transition-opacity relative animate-fade-in-delay-2">
      <Canvas
        camera={{ position: [1, 5, 5] }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[15, 15, 15]}
          intensity={1.5}
        />
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
            rotateSpeed={6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model3D;

// Preload model
useGLTF.preload(MODEL_URL, true); 