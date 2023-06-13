import './App.css'
import ThreeScene from './Components/ThreeScene'
import Sphere from './Components/Sphere'

function App() {

  return (
    <>
      <ThreeScene>
        <Sphere/>
        <ambientLight/>
      </ThreeScene>
    </>
  )
}

export default App
