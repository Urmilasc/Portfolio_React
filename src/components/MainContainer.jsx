import '../index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'

import ReactLogo from './canvas/ReactLogo'
import StarsAnimated from './StarsAnimated'
import Hero from './Hero'
import { Suspense } from 'react'

const MainContainer = () => {
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }
  return (
    <>
      <Canvas
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={bgColor}>
        <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />
        <OrbitControls />
        <StarsAnimated />
        <Suspense fallback={null}>
          <ReactLogo />
        </Suspense>
      </Canvas>
      <Loader />
      <Hero />
    </>
  )
}

export default MainContainer
