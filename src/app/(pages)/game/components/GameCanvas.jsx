import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function GameCanvas() {
  return (
    <Canvas className="w-full h-full" frameloop="demand">
            <ambientLight />
            <Box>
                <meshPhongMaterial />
            </Box>
        </Canvas>
  )
}
