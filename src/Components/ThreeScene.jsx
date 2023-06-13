import { Canvas } from "@react-three/fiber"

const ThreeScene = ({ children }) => {
  return <Canvas style={{
    height: '100vh'
  }}>{ children }</Canvas>
}

export default ThreeScene