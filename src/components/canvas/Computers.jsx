import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, yValue }) => {
    const computer = useGLTF("/desktop_pc/scene.glb"); // Updated path

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024} // Fixed shadow map size
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, yValue, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [yValue, setYValue] = useState(-3);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Adjust yValue dynamically for better mobile positioning
        const adjustYValue = () => {
            setYValue(window.innerHeight < 700 ? (window.innerHeight < 600 ? -3.5 : -3) : -2.5);
        };

        adjustYValue(); // Initial call

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        window.addEventListener("resize", adjustYValue);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
            window.removeEventListener("resize", adjustYValue);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, window.devicePixelRatio]} // Ensure better rendering on mobile
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader isMobile={isMobile} />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers isMobile={isMobile} yValue={yValue} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
    window.onerror = function(message, source, lineno, colno, error) {
        alert(`Error: ${message}\nSource: ${source}\nLine: ${lineno}, Column: ${colno}`);
    };
    
};

export default ComputersCanvas;
