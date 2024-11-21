import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Spacepl2 from './components/Spacepl2'
import Spacepl11 from './components/Spacepl11'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
    <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
      {/* <OrbitControls /> */}
      <Experience />      
    </Canvas>
    </>
  )
}

export default App;
