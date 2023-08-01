'use client'
import { Canvas } from "@react-three/fiber";
import { Box } from '@react-three/drei'

export default function page() {
  return (
    <main className="h-screen w-screen overflow-clip">
        <div>GAME GOES HERE</div>
        <Canvas className="w-full h-full" frameloop="demand">
            <ambientLight />
            <Box>
                <meshPhongMaterial />
            </Box>
        </Canvas>
    </main>
  )
}
