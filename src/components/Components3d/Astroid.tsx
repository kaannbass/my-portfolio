// Astroid.js
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Astroid = ({ opacity }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial transparent opacity={opacity} />
      </Sphere>
    </Canvas>
  );
};

export default Astroid;
