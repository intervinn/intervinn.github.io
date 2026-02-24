import About from "../components/blocks/about"
import Experience from "../components/blocks/exp"
import Head from "../components/blocks/head"
import Projects from "../components/blocks/projects"
import Navbar from "../components/nav"

function Home() {
  return (
    <div className="bg-bg min-h-screen flex justify-center items-center flex-col">
      <Navbar/>
      <div className="bg-bg2 min-h-screen w-full lg:w-[64rem] px-12 py-12">
        <Head/>
        <About/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  )
}

export default Home
