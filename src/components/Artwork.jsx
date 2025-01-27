import React from "react";
import * as THREE from "three";

export function Artwork({ rotationY }) {
  const textures = [
    new THREE.TextureLoader().load("texture.jpg"),
    new THREE.TextureLoader().load("texture.jpg"),
    new THREE.TextureLoader().load("texture.jpg"),
    new THREE.TextureLoader().load("texture.jpg"),
    new THREE.TextureLoader().load("texture.jpg"),
    new THREE.TextureLoader().load("texture.jpg"),
  ];

  return (
    <group rotation-y={rotationY}>
      <mesh position={[0, -1, -4]} receiveShadow castShadow>
        <boxGeometry args={[1, 0.7, 1]} /> {/* 너비, 높이, 깊이 설정 */}
        {textures.map((texture, index) => (
          <meshStandardMaterial
            key={index}
            attachArray="material"
            map={texture}
          />
        ))}
      </mesh>
    </group>
  );
}
