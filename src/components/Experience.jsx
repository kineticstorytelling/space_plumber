import { OrbitControls } from "@react-three/drei";

const Experience = () => {
    return(
        <>
        <OrbitControls />
        <mesh>
            <boxGeometry args={[5,5,5]} />
            <meshNormalMaterial />            
        </mesh>
        </>
    );
};

export default Experience;