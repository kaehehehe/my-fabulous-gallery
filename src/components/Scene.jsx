import React from "react";
import { Artwork } from "./Artwork";
import { Floor } from "./Floor";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const MODEL_COUNT = 5;

export function Scene({ setPreviewLink }) {
  const { scene: magnemiteScene } = useGLTF("magnemite.glb");
  const { scene: lipstickScene } = useGLTF("lipstick.glb");
  const { scene: iceCreamScene } = useGLTF("soft-serve-ice-cream.glb");
  const { scene: strawberryScene } = useGLTF("strawberry.glb");
  const { scene: starCandyScene } = useGLTF("star-candy.glb");

  const models = [
    {
      scene: magnemiteScene,
      position: [0, -0.5, -3.85],
      scale: [0.1, 0.1, 0.1],
      link: "https://magnemite-blond.vercel.app/",
    },
    {
      scene: iceCreamScene,
      position: [0, -0.45, -3.85],
      scale: [0.1, 0.1, 0.1],
      link: "https://soft-serve-ice-cream.vercel.app/",
    },
    {
      scene: lipstickScene,
      position: [0, -0.51, -3.85],
      scale: [0.028, 0.028, 0.028],
      link: "https://lipqsticks-one.vercel.app/",
    },
    {
      scene: starCandyScene,
      position: [0, -0.48, -3.85],
      scale: [0.12, 0.12, 0.12],
      link: "https://candy-spiral.vercel.app/",
    },
    {
      scene: strawberryScene,
      position: [0, -0.63, -3.85],
      scale: [0.25, 0.25, 0.25],
      link: "https://strawberry-rain.vercel.app/",
    },
  ];

  useFrame((state) => {
    state.scene.rotation.y += 0.0001;
  });

  const onClickArtWork = (link) => {
    setPreviewLink(link);
  };

  return (
    <>
      {Array.from({ length: MODEL_COUNT }).map((_, index) => {
        const { scene, position, scale, link } = models[index];
        return (
          <Artwork
            key={index}
            rotationY={index * ((2 * Math.PI) / MODEL_COUNT)}
            scene={scene}
            position={position}
            scale={scale}
            onClick={() => onClickArtWork(link)}
          />
        );
      })}
      <Floor />
    </>
  );
}
