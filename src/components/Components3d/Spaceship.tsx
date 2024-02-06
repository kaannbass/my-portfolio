import React from 'react';
import { useGLTF } from '@react-three/drei';
import GLBModel from '../../assets/3d/index';

type Props = {};

const Spaceship: React.FC<Props> = () => {
  const { scene } = useGLTF(GLBModel.Spaceship);

  if (scene) {
    scene.scale.set(0.03, 0.03, 0.03);
    scene.rotation.y = Math.PI;
  }
  return <primitive position={[0, 0, -20]} object={scene} />;
};

export default React.memo(Spaceship);
