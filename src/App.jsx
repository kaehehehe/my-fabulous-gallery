import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Scene } from "./components/Scene";
import "./styles.css";

const App = () => {
  const [previewLink, setPreviewLink] = useState(null); // 상태로 링크 관리

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "q") {
        setPreviewLink(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <iframe
        src={previewLink}
        className={`preview ${previewLink ? "show" : "hide"}`}
      />
      <Canvas
        style={{ backgroundColor: "#887d69" }}
        camera={{ fov: 20, position: [0, -3, 2] }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 1]} intensity={0.5} />
        <Environment preset="night" environment />
        <Scene setPreviewLink={setPreviewLink} />
        <OrbitControls
          minDistance={0.1}
          maxDistance={4}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default App;
