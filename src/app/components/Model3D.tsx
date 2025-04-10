'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// Model URL 
const MODEL_URL = "https://1x3dlmcdtl30e8ka.public.blob.vercel-storage.com/gaming_desktop_pc-NlvFCIGyKfdoMKNX93il1IvWh43xUn.glb";

function Model() {
  const { scene } = useGLTF(MODEL_URL);
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.3} position={[0, 0, 0]} />;
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
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] transition-opacity relative animate-fade-in-delay-2">
      <Canvas
        camera={{ position: [0, 5, 5], fov: 30 }}
        gl={{ alpha: true, antialias: true }}
        style={{ 
          background: "transparent",
          width: "100%",
          height: "100%"
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[15, 25, 15]}
          intensity={1.5}
        />
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2.4}
            maxPolarAngle={Math.PI / 2.4}
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