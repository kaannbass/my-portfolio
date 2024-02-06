import { useGLTF } from "@react-three/drei";
import GLBModel from '../../assets/3d/index';

export function Earth({ opacity, ...props }: any) {
  const { scene,materials } = useGLTF(GLBModel.Earth);

  if (scene) {
    scene.scale.set(0.07, 0.07, 0.07);
  }

  return (
    <group {...props} dispose={null}>
      <mesh>
        <primitive object={scene} />
        <meshStandardMaterial
          {...materials["lambert2SG.001"]}
          transparent
          opacity={opacity}
        />
      </mesh>

    </group>
  );
}

useGLTF.preload(GLBModel.Earth);
