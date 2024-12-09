import { OrbitControls } from "@react-three/drei";
import Spacepl2 from "./Spacepl2";


const Experience = () => {
    return(
        <>
        <OrbitControls />
        <ambientLight />
        <directionalLight 
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />
      <group position={[0, -1, 0]}>
        <Spacepl2 />
      </group>
        <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        {/* <planeBufferGeometry args={[10, 10, 1, 1]} /> */}
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
        </>
    );
};

export default Experience;