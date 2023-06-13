import './App.css'
import ThreeScene from './Components/ThreeScene'
import Sphere from './Components/Sphere'
import { AsciiRenderer, OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
      <ThreeScene>
        <color attach={"background"} args={["black"]}/>
        <Sphere color="#ef1" position={[-1,0,0]}/>
        <Sphere color="#1c5" position={[1,1,1]}/>
        <AsciiRenderer fgColor="white" bgColor="black"/>
        <ambientLight/>
        <OrbitControls autoRotate autoRotateSpeed={10}/>
      </ThreeScene>
    </>
  )
}

export default App
