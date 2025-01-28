import React from "react";
import * as THREE from "three";

export function Floor() {
  const texture = new THREE.TextureLoader().load("/textures/floor.jpg");

  return (
    <mesh position-y={-1} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
