import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three";

export function Artwork({ rotationY }) {
  const iceCreamTexture = new THREE.TextureLoader().load(
    "/textures/ice-cream.jpg"
  );

  const textures = [
    new THREE.TextureLoader().load("/textures/box.jpg"),
    new THREE.TextureLoader().load("/textures/box.jpg"),
    new THREE.TextureLoader().load("/textures/box.jpg"),
    new THREE.TextureLoader().load("/textures/box.jpg"),
    new THREE.TextureLoader().load("/textures/box.jpg"),
    new THREE.TextureLoader().load("/textures/box.jpg"),
  ];

  const { scene } = useGLTF("ice-cream.glb");

  useEffect(() => {
    scene.children[2].material.color.set("#DAB27A");
    scene.children[4].material.map = iceCreamTexture;
    scene.children[4].material.needsUpdate = true;
    THREE.ColorManagement.enabled = true;
  }, [scene]);

  return (
    <group rotation-y={rotationY}>
      <mesh position={[0, -1, -4]}>
        <boxGeometry args={[1, 0.7, 1]} />
        {textures.map((texture, index) => (
          <meshStandardMaterial
            key={index}
            attachArray="material"
            map={texture}
          />
        ))}
      </mesh>

      <mesh position={[0, -0.63, -3.85]}>
        <primitive object={scene.clone()} scale={[0.07, 0.07, 0.07]} />
      </mesh>
    </group>
  );
}
