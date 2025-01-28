import React from "react";
import * as THREE from "three";
import { IceCreamModel } from "./IceCreamModel";

export function Floor() {
  const texture = new THREE.TextureLoader().load("/textures/floor.jpg");

  return (
    <group>
      <mesh position-y={-1} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* ice cream 모델 */}
      <IceCreamModel />
    </group>
  );
}
