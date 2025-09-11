import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshWobbleMaterial } from '@react-three/drei';

const SkillObject = () => (
  <div style={{ width: '100%', height: 200 }}>
    <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />
      <Sphere args={[0.9, 32, 32]}>
        <MeshWobbleMaterial
          color={'#f59e42'}
          factor={1.2}
          speed={2}
          roughness={0.3}
        />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
);

export default SkillObject;
