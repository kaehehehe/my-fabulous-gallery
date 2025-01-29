import * as THREE from "three";
import React from "react";

export function Artwork({ rotationY, scene, position, scale, onClick }) {
  const texture = new THREE.TextureLoader().load("/textures/box.jpg");

  return (
    <group rotation-y={rotationY} onClick={onClick}>
      <mesh position={[0, -0.75, -4]}>
        <boxGeometry args={[1, 0.7, 1]} />
        {Array.from({ length: 5 }).map((_, index) => (
          <meshStandardMaterial
            key={index}
            attachArray="material"
            map={texture}
          />
        ))}
      </mesh>

      <mesh position={position}>
        <primitive object={scene} scale={scale} />
      </mesh>
    </group>
  );
}
