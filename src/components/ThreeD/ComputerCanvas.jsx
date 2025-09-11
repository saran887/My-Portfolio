import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ComputerModel(props) {
  const { scene } = useGLTF('/models/computer.glb');
  return <primitive object={scene} {...props} />;
}

const ComputerCanvas = () => (
  <div style={{ width: '100%', height: 300 }}>
    <Canvas camera={{ position: [0, 1.5, 3] }} gl={{ alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />
      <Suspense fallback={null}>
        <group rotation={[0.1, 0, 0]}>
          <ComputerModel />
        </group>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  </div>
);

export default ComputerCanvas;

// Note: Place computer.glb in public/models/computer.glb
