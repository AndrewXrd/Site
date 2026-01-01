import '../css/LocalLens.css'
import logo from '../assets/logo-LL.png'
import "@fontsource/chakra-petch";
import home from '../assets/home-screen.png'
import front from '../assets/front-screen.jpg'
import host from '../assets/host-screen.png'
import codescreen from '../assets/code-screen1.png'
import codescreen2 from '../assets/code-screen2.png'
import { useEffect } from 'react'
import NavBar from '../components/NavBar'

function LocalLens() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ll-container">
            <NavBar />
            <section className="ll-top-section">
                <div className="ll-logo">
                    <img src={logo} />
                </div>
                <div className="ll-content">
                    <h2>LocalLensSL</h2>
                    <p>
                        "LocalLens SL" is a mobile application designed to connect travelers (both local Sri Lankans and
                        foreign visitors) with unique, authentic, and hyper-local experiences offered directly by passionate
                        locals or small, independent operators across Sri Lanka. Moving beyond generic tours, LocalLens
                        SL focuses on niche activities like traditional cooking classes in a village home, hidden hiking
                        trails with a local guide, artisanal craft workshops, responsible wildlife spotting, or guided
                        photography walks. An intelligent agentic AI will act as a personalized experience curator,
                        recommending tailored activities based on user preferences, travel dates, and location, suggesting
                        complementary experiences, and helping local hosts showcase their unique offerings.
                    </p>
                    <p>
                        I build this with React-native with Expo Go and Google Firebase. As a MVP model I build the basic things
                        of the app. Still I have to work on the backend to make it more secured and efficient app.
                        So yeah... looking forward to launch into Play Store and App Store

                    </p>
                </div>
            </section>

            <section className="ll-images-division">
                <img src={front} />
                <img src={home} />
                <img src={host} />
                <img src={codescreen} />
                <img src={codescreen2} />
            </section>
            <div className="scroll-indicator">
                Scroll to see more <span>&rarr;</span>
            </div>
        </div>
    )
}

export default LocalLens
