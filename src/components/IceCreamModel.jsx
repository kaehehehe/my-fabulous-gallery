import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three";

export function IceCreamModel() {
  const { scene } = useGLTF("ice-cream.glb");
  const texture = new THREE.TextureLoader().load("/textures/ice-cream.jpg");

  useEffect(() => {
    scene.children[2].material.color.set("#DAB27A");
    scene.children[4].material.map = texture;
    scene.children[4].material.needsUpdate = true;
    THREE.ColorManagement.enabled = true;
  }, [scene, texture]);

  return (
    <mesh position={[0.7, -1, -3.5]} rotation-y={Math.PI}>
      <primitive object={scene} scale={[0.05, 0.05, 0.05]} />
    </mesh>
  );
}
