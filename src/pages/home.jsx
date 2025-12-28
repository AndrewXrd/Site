import NavBar from "../components/NavBar"
import TitlePage from "../pages/TitlePage"
import About from "../pages/About"
import Education from "../pages/Education"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import '../css/Home.css'


function Home() {

    return (
        <div className="home-container">
            <NavBar />
            <div id="home">
                <TitlePage />
            </div>
            <div id="about">
                <About />
            </div>
            <Education />
            <Skills />
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>

    )
}

export default Home