import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Spacepl1 from './components/Spacepl1'

function App() {

  return (
    <>
    <Canvas>
      <Experience />      
      <Spacepl1 />
    </Canvas>
    </>
  )
}

export default App;
