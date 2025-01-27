import React from "react";
import * as THREE from "three";

export function Floor() {
  const texture = new THREE.TextureLoader().load("floor.jpg");

  return (
    <mesh position-y={-1} rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
