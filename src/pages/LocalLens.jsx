import '../css/LocalLens.css'
import logo from '../assets/logo-LL.png'
import "@fontsource/chakra-petch";
import home from '../assets/home-screen.png'
import front from '../assets/front-screen.jpg'
import host from '../assets/host-screen.png'
import codescreen from '../assets/code-screen1.png'
import onsite1 from '../assets/onsite1.jpg'
import onsite2 from '../assets/onsite2.jpg'
import onsite3 from '../assets/onsite3.jpg'
import virtusaLogo from '../assets/virtusa-logo.svg'
import linkedinIcon from '../assets/linkedIn.png'
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
                        I built this project in collaboration with <strong>Virtusa Pvt Ltd</strong>, utilizing React Native with Expo Go for the frontend and Google Firebase for the backend. As an MVP model, the application implements core booking, recommendation, and host features, excluding final payment gateways.
                    </p>

                    <div className="ll-collaboration-card">
                        <div className="ll-collab-header">
                            <span className="ll-collab-badge">Collaboration</span>
                            <img src={virtusaLogo} alt="Virtusa Logo" className="ll-virtusa-logo" />
                        </div>
                        <p className="ll-collab-description">
                            Developed under the industry-academic collaboration with Virtusa Pvt Ltd.
                        </p>
                        <div className="ll-supervisor-section">
                            <span className="ll-supervisor-label">Project Supervisor:</span>
                            <div className="ll-supervisor-info">
                                <span className="ll-supervisor-name">Laksiri Balasuriya</span>
                                <span className="ll-supervisor-title">Lead Consultant at Virtusa</span>
                                <a
                                    href="https://www.linkedin.com/in/laksiri-balasuriya-73a49619/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ll-linkedin-btn"
                                >
                                    <img src={linkedinIcon} alt="LinkedIn Logo" className="ll-linkedin-icon" />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p>
                        GitHub:
                        <br />
                        <a href="https://github.com/AndrewXrd/LocalLensSL---Host-App">Host app</a>
                        <br />
                        <a href="https://github.com/AndrewXrd/LocalLensSL">User app</a>
                    </p>
                </div>
            </section>

            <section className="ll-images-division">
                <img src={front} />
                <img src={home} />
                <img src={host} />
                <img src={codescreen} />
                <img src={onsite1} />
                <img src={onsite2} />
                <img src={onsite3} />
            </section>
            <div className="scroll-indicator">
                Scroll to see more <span>&rarr;</span>
            </div>
        </div>
    )
}

export default LocalLens
