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
            shadow-mapSize={1024} 
        />
        <Spacepl2 />
        <mesh>
            <boxGeometry args={[5,5,5]} />
            <meshNormalMaterial />            
        </mesh>
        </>
    );
};

export default Experience;