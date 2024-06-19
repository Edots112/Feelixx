// import React, { useState } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three";
// import Image from "next/image";

// const outfits = {
//   head: ["hat1.png", "hat2.png"],
//   body: ["body1.png", "body2.png"],
// };

// function Cat({ head, body }) {
//   const catTexture = useLoader(TextureLoader, "/cat.png");
//   const headTexture = head
//     ? useLoader(TextureLoader, `/outfits/${head}`)
//     : null;
//   const bodyTexture = body
//     ? useLoader(TextureLoader, `/outfits/${body}`)
//     : null;

//   return (
//     <Canvas>
//       <group scale={5}>
//         <sprite position={[0, 0, 0]}>
//           <spriteMaterial attach="material" map={catTexture} />
//         </sprite>
//         {headTexture && (
//           <sprite position={[0, 0.5, 0]}>
//             <spriteMaterial attach="material" map={headTexture} />
//           </sprite>
//         )}
//         {bodyTexture && (
//           <sprite position={[0, -0.5, 0]}>
//             <spriteMaterial attach="material" map={bodyTexture} />
//           </sprite>
//         )}
//       </group>
//     </Canvas>
//   );
// }

// function OutfitSelector({ type, options, onSelect }) {
//   return (
//     <div className="outfit-selector p-4">
//       <h3>{type}</h3>
//       <div className="options flex gap-3 mt-2">
//         {options.map((option) => (
//           <Image
//             width={80}
//             height={80}
//             key={option}
//             src={`/outfits/${option}`}
//             alt={option}
//             onClick={() => onSelect(type, option)}
//             className="cursor-pointer aspect-square  outline-1 outline-white outline-dashed outline-offset-2 hover:outline-offset-4 bg-white rounded-md"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function MemeGenerator() {
//   const [selectedOutfits, setSelectedOutfits] = useState({
//     head: null,
//     body: null,
//   });

//   const handleSelect = (type, option) => {
//     setSelectedOutfits((prev) => ({ ...prev, [type]: option }));
//   };

//   return (
//     <div className="gap-3 w-full h-96 grid grid-cols-3 ">
//       <div className="bg-orange-500 rounded-lg relative -z-10">
//         <Cat head={selectedOutfits.head} body={selectedOutfits.body} />
//       </div>
//       <div className="bg-orange-500 col-span-2 rounded-lg">
//         {Object.keys(outfits).map((type) => (
//           <OutfitSelector
//             key={type}
//             type={type}
//             options={outfits[type]}
//             onSelect={handleSelect}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// // 