import React from 'react';
import { Background } from "./Background";
import Spaceship from './Spaceship';
// import { Text } from '@react-three/drei';
import { Earth } from './Earth';



export const Experience: React.FC = () => {
    return (
        <>
            <Background />
            <Spaceship rotation-y={Math.PI / 2}
                scale={[0.2, 0.2, 0.2]}
                position-y={0.1} />
            {/*             
            <group>
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>

                <Text
                    position={[0, 1, 0]}
                    fontSize={0.5}
                    color="#d3d3d3"
                    anchorX="center"
                    anchorY="middle"
                >
                    Hi, Welcome My Portfolio
                </Text>

                <Text
                    position={[0, 2, 0]}
                    fontSize={0.5}
                    color="#d3d3d3"
                    anchorX="center"
                    anchorY="middle"
                >
                    Your Text on Top of GLB Model
                </Text>
            </group> */}

            {/* <Earth opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} /> */}
            {/* <Earth opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
            <Earth
                opacity={0.7}
                scale={[0.3, 0.3, 0.4]}
                rotation-y={Math.PI / 9}
                position={[2, -0.2, -2]}
            />
            <Earth
                opacity={0.7}
                scale={[0.4, 0.4, 0.4]}
                rotation-y={Math.PI / 9}
                position={[1, -0.2, -12]}
            />
            <Earth opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
            <Earth opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} /> */}
        </>
    );
};
