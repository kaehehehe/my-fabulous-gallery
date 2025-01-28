import React from "react";
import { Artwork } from "./Artwork";
import { Floor } from "./Floor";
import { useFrame } from "@react-three/fiber";

const numCubes = 6;

export function Scene() {
  useFrame((state) => {
    state.scene.rotation.y += 0.0001;
  });

  return (
    <>
      {Array.from({ length: numCubes }).map((_, index) => (
        <Artwork key={index} rotationY={index * ((2 * Math.PI) / numCubes)} />
      ))}
      <Floor />
    </>
  );
}
