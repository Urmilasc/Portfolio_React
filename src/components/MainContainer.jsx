import "../index.css"
import { Suspense , useState , useRef} from "react"
import {Canvas} from "@react-three/fiber"
import ReactLogo from "./canvas/ReactLogo"
import { Loader} from "@react-three/drei"
import StarsAnimated from "./StarsAnimated"
import Hero from "./Hero"
import Projects from "./Projects";
import WorkExperience from "./WorkExperience"
import { Contact } from "./Contact"
import Earth from "./canvas/Earth"

import About from "./About";
import Skills from "./Skills"

const MainContainer = () => {

  const [isLoaded , setLoaded] = useState(false);

  const canvasRef = useRef();

  const handleCreated = () =>{
      setLoaded(true)
  }


  // const bgColor=({gl}) =>{
  //   gl.setClearColor('#000000' , 1) // Set the background color to
  // }
  return (
    <>
      <Canvas
        ref={canvasRef}
        id='canvas'
        style={{position: 'fixed'}}
        camera={{position: [20, 3, 5], fov:25}}
        onCreated={handleCreated}
      >
      <color attach='background' args={['black']}/>  // colour changing property of background
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0x61dbfb} position={[-20, 50, 10]} />
      
      <StarsAnimated />
      <Suspense fallback={null}>
        <ReactLogo />
        <Earth />
      </Suspense>
      

      </Canvas>
      <Loader />
      <Hero 
        isLoaded={isLoaded}
      />
      <About/>
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
      
    </>
  )
}
export default MainContainer;


//part - 13 , optimised code for canvas loading 