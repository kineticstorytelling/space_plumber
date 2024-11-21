import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Spacepl2 from './components/Spacepl2'
import Spacepl11 from './components/Spacepl11'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
    <Canvas>
      <OrbitControls />
      {/* <Experience />       */}
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
      <group position={[0, -1, 0]}>
      <Spacepl2 />
      <group/>  
    </Canvas>
    </>
  )
}

export default App;
