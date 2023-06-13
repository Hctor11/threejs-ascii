import { Canvas } from "@react-three/fiber"

const ThreeScene = ({ children }) => {
  return <Canvas style={{
    backgroundColor: "#000",
    height: '100vh'
  }}>{ children }</Canvas>
}

export default ThreeScene