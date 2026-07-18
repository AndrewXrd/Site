import NavBar from "../components/NavBar"
import TitlePage from "../pages/TitlePage"
import About from "../pages/About"
import Education from "../pages/Education"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import ScrollReveal from "../components/ScrollReveal"
import '../css/Home.css'


function Home() {

    return (
        <div className="home-container">
            <NavBar />
            <div id="home">
                <TitlePage />
            </div>
            
            <ScrollReveal>
                <div id="about">
                    <About />
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <Education />
            </ScrollReveal>

            <ScrollReveal>
                <Skills />
            </ScrollReveal>

            <ScrollReveal>
                <div id="projects">
                    <Projects />
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div id="contact">
                    <Contact />
                </div>
            </ScrollReveal>
        </div>

    )
}

export default Home