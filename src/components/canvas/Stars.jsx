import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="gold"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const WebGLCleanup = () => {
  const { gl } = useThree();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn("WebGL context lost");
    };

    const handleContextRestored = () => {
      console.info("WebGL context restored");
    };

    gl.domElement.addEventListener("webglcontextlost", handleContextLost);
    gl.domElement.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      gl.domElement.removeEventListener("webglcontextlost", handleContextLost);
      gl.domElement.removeEventListener("webglcontextrestored", handleContextRestored);
      gl.dispose();
    };
  }, [gl]);

  return null;
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <WebGLCleanup />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
