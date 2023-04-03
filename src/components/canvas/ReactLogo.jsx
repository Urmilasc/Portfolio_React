import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

const ReactLogo = () => {
  // Memoize the reactLogo object to avoid unnecessary recalculations and re-renders
  const reactLogo = useMemo(() => useGLTF('./reactLogo/scene.gltf'), [])
  return (
    <mesh>
      {/* this is our gltf model */}
      <primitive
        object={reactLogo.scene}
        // This gives a good angle for model on load
        rotation={[0, -5, 0]}
        // Change model size with scale
        scale={0.65}
      />
    </mesh>
  )
}

export default ReactLogo
