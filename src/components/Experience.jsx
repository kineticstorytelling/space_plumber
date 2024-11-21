import { OrbitControls } from "@react-three/drei";


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
        <mesh>
            <boxGeometry args={[5,5,5]} />
            <meshNormalMaterial />            
        </mesh>
        </>
    );
};

export default Experience;