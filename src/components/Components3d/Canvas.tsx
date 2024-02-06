import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

function MyCanvas() {
    return (
        <>
            <Canvas>
                <color attach="background" args={["black"]} />
                <ScrollControls pages={1} damping={0.3}>
                    <Experience />
                </ScrollControls>
            </Canvas>
        </>
    );
}

export default MyCanvas;