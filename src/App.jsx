import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./components/Scene";
import "./styles.css";

const App = () => {
  return (
    <Canvas
      shadows // 그림자 활성화
      style={{ backgroundColor: "#887d69" }}
      camera={{ fov: 25, position: [0, 1, 3] }}
    >
      <ambientLight intensity={0.5} />
      <Scene />
      <OrbitControls
        // enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default App;
