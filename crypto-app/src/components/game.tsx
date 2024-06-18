"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import {
  OrthographicCamera,
  PerspectiveCamera,
  CameraShake,
  Environment,
  Text,
  Grid,
  Image,
  Clouds,
} from "@react-three/drei";
import * as THREE from "three";
import { create } from "zustand";
import {
  BallCollider,
  CylinderCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
  vec3,
} from "@react-three/rapier";

interface globalState {
  birdPos: { x: number; y: number; z: number };
  setBirdPos: (pos: { x: number; y: number; z: number }) => void;
  score: number;
  setScore: (newScore: number) => void;
  over: boolean;
  setOver: (newScore: boolean) => void;
}
const globalStore = create<globalState>((set) => ({
  birdPos: { x: 0, y: 0, z: 0 },
  setBirdPos: (pos) => set({ birdPos: pos }),
  score: 0,
  setScore: (newScore) => set({ score: newScore }),
  over: false,
  setOver: (gameState) => set({ over: gameState }),
}));

function GameOver() {
  const {setOver,setScore}=globalStore()
  const [ttr, settTr] = useState(10);
  useFrame(({ clock }) => {
    if(Math.round(clock.elapsedTime)){
      settTr(Math.round(10-clock.elapsedTime))
      if(Math.round(10-clock.elapsedTime)<=0){
        setOver(false)
        setScore(0)
        settTr(10)
        clock.start()
      }
    }

  });
  return (
    <group>
      <Text fontWeight={900} color={"#fff"} scale={0.4} position={[0, 0, -1]}>
        Game Over
        <meshPhysicalMaterial
          emissiveIntensity={1000}
          emissive={"#00da88"}
          color={"white"}
        />
      </Text>
      <Text scale={.1} position={[0,-.3,0]} >resetting in : {ttr}    <meshPhysicalMaterial
          emissiveIntensity={1000}
          emissive={"#00da88"}
          color={"white"}
        /></Text>
    </group>
  );
}
function Score() {
  const { score, setScore, over } = globalStore();
  useFrame(({ clock }) => {
    if (over) {
      return;
    }
    setScore(clock.elapsedTime);
  });
  return (
    <>
      <Text fontWeight={300} color={"black"} position={[0, 0.7, 1]} scale={0.1}>
        Score : {Math.round(score * 10)}
        <meshPhysicalMaterial
          emissiveIntensity={1000}
          emissive={"#00da88"}
          color={"white"}
        />
      </Text>
    </>
  );
}
export default function Game() {
  const { birdPos, over, setOver } = globalStore();
  return (
    <Canvas onClick={() => setOver(false)} className="">
      <Suspense>
        <Physics>
          {over && <GameOver />}
    <fog/>
    <Clouds/>
          <Environment preset="sunset" />
          <Score />
          <CameraShake
            intensity={0.1}
            maxPitch={0}
            maxRoll={0.05}
            maxYaw={0.1}
          />
          <PerspectiveCamera
            scale={10}
            makeDefault
            position={[0, birdPos.y, 10]}
            zoom={5}
          />
          {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={300} /> */}
          <ambientLight />
          <Bird />
          <Pipes />
          <RigidBody type="fixed">
            <mesh position={[0, 1 + 0.25, 0]}>
              <boxGeometry args={[10, 0.5, 10  ]} />
               <meshPhysicalMaterial
              reflectivity={1}
              metalness={1}
              color="#00da88"
            />
            </mesh>
          </RigidBody>
          <RigidBody type="fixed">
            <mesh position={[0, -1 - 0.25, 0]}>
              <boxGeometry args={[10, 0.5, 10]} />
               <meshPhysicalMaterial
              reflectivity={1}
              metalness={1}
              color="#00da88"
            />
            </mesh>
          </RigidBody>
        </Physics>
      </Suspense>
    </Canvas>
  );
}

const Bird: React.FC = () => {
  const { setBirdPos, setOver } = globalStore();
  const birdRef = useRef<RapierRigidBody>(null);

  const handleFlap = () => {
    if (birdRef.current) {
      birdRef.current.applyImpulse(vec3({ x: 0, y: 0.008, z: 0 }), true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleFlap);

    return () => {
      window.removeEventListener("keydown", handleFlap);
    };
  }, []);

  useFrame(() => {
    if (birdRef.current) {
      const birdPosition = birdRef.current.translation();
      setBirdPos({ x: birdPosition.x, y: birdPosition.y, z: birdPosition.z });

      // Reset bird position and velocity if it falls below a certain point
      if (birdPosition.y < -2) {
        birdRef.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }), true);
        birdRef.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }), true);
        setOver(true);
      }
    }
  });

  return (
    <RigidBody
      mass={0.1}
      ref={birdRef}
      enabledRotations={[false, false, false]}
      //   linearDamping={0.9}
      colliders={false}
      // enabledTranslations={[true, true, false]}
      onIntersectionEnter={() => {
        if (birdRef.current) {
          // birdRef.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }), true);
          // birdRef.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }), true);
          setOver(true);
        }
      }}
    >
      <BallCollider args={[0.08]} />
      {/* // eslint-disable-next-line jsx-a11y/alt-text */}
      <Image url="/cat.png" scale={0.2} />
    </RigidBody>
  );
};

interface Pipe {
  position: [number, number, number];
  height: number;
}

const Pipes: React.FC = () => {
  const { over } = globalStore();
  const [pipes, setPipes] = useState<Pipe[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (over) {
        return;
      }
      const topPipeHeight = Math.random() * 0.7 + 0.4;
      const bottomPipeHeight = 1.2 - topPipeHeight;
      const newPipes: Pipe[] = [
        { position: [3, 1 - topPipeHeight / 2, 0], height: topPipeHeight },
        {
          position: [3, -1 + bottomPipeHeight / 2, 0],
          height: bottomPipeHeight,
        },
      ];
      setPipes((prevPipes) => [...prevPipes, ...newPipes]);
    }, 2000);

    return () => clearInterval(interval);
  }, [over]);

  useFrame(() => {
    setPipes((prevPipes) =>
      prevPipes
        .map((pipe) => ({
          ...pipe,
          position: [pipe.position[0] - 0.01, pipe.position[1], 0],
        }))
        .filter((pipe) => pipe.position[0] > -3)
    );
  });

  return (
    <>
      {pipes.map((pipe, index) => (
        <RigidBody
          key={pipe.height}
          position={pipe.position}
          type="fixed"
          colliders={false}
        >
          <CylinderCollider sensor args={[pipe.height / 2, 0.08]} />
          <mesh>
            <Image
              url="/chinaroof.png"
              position={[0, pipe.height / 2 + 0.05, 0.01]}
              scale={0.2}
            />
            <Image
              url="/chinaroof.png"
              rotation={[0, 0, Math.PI]}
              position={[0, -pipe.height / 2 - 0.05, 0.01]}
              scale={0.2}
            />
            <cylinderGeometry args={[0.08, 0.08, pipe.height, 12]} />
            <meshPhysicalMaterial
              reflectivity={1}
              metalness={1}
              color="#00da88"
            />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
};
