import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const GlobeCanvas = () => (
  <div style={{ width: '100%', height: 300 }}>
    <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={'#06b6d4'}
          emissive={'#3b82f6'}
          emissiveIntensity={0.5}
          distort={0.3}
          speed={2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  </div>
);

export default GlobeCanvas;
