import { Environment, Stars } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";

import * as THREE from "three";

// scale={[100, 100, 100]}

export const Background = () => {
    return (
        <>
            <Environment preset="sunset" />
            <Stars rotation-y={Math.PI / 2}>
                <LayerMaterial
                    color={"#ffffff"}
                    lighting="physical"
                    transmission={1}
                    side={THREE.BackSide}
                >
                    <Gradient
                        colorA={"#357ca1"}
                        colorB={"white"}
                        axes={"y"}
                        start={0}
                        end={-0.5}
                    />
                </LayerMaterial>
            </Stars>
        </>
    );
};