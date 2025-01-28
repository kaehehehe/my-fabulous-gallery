import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./components/Scene";
import "./styles.css";

const App = () => {
  return (
    <Canvas
      style={{ backgroundColor: "#887d69" }}
      camera={{ fov: 25, position: [0, 1, 3] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 1]} intensity={1} />
      <Scene />
      <OrbitControls
        enableZoom={true}
        minDistance={0.1}
        maxDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default App;
