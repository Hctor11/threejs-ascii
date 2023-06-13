

const Sphere = ({ color, position }) => {
  return (
    <mesh position={position}>
        <sphereGeometry/>
        <meshStandardMaterial wireframe color={color}/>
    </mesh>
  )
}

export default Sphere