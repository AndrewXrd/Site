import '../css/LocalLens.css'
import "@fontsource/chakra-petch";
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import logo from '../assets/HIT-logo.png'
import image1 from '../assets/HIT (1).png'
import image2 from '../assets/HIT (2).png'
import image3 from '../assets/HIT (3).png'
import image4 from '../assets/HIT (4).png'
import image5 from '../assets/HIT (5).png'

function Hit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ll-container">
            <NavBar />
            <section className="ll-top-section">
                <div className="ll-logo">
                    {/* Replace this placeholder src with your imported logo */}
                    <img src={logo} alt="HIT Logo" />
                </div>
                <div className="ll-content">
                    <h2>HIT</h2>
                    <p>
                        "HIT" (High-Intensity Training Tracker) is a fully functional, cross-platform mobile application engineered to track workouts, manage training cycles, and deliver AI-powered fitness insights. Built from the ground up with a mobile-first architecture to deliver a premium experience packaged into a native Android application.
                    </p>
                    <p>
                        Whether you're tracking daily training, managing complex workout cycles, utilizing the built-in rest timers, or reviewing your fitness history—HIT delivers a sleek, responsive, and intuitive interface. It integrates Google's Gemini API to provide smart, contextual fitness recommendations and workout generation! Built using React, TypeScript, Tailwind CSS, Vite, and Capacitor.
                    </p>
                    <p>
                        GitHub:
                        <br />
                        <a href="https://github.com/AndrewXrd/HIT">HIT Repository</a>
                    </p>
                </div>
            </section>

            <section className="ll-images-division">
                {/* Replace these placeholder images with your imported screenshots */}
                <img src={image1} alt="Screenshot 1" />
                <img src={image2} alt="Screenshot 2" />
                <img src={image3} alt="Screenshot 3" />
                <img src={image4} alt="Screenshot 4" />
                <img src={image5} alt="Screenshot 5" />
            </section>
            <div className="scroll-indicator">
                Scroll to see more <span>&rarr;</span>
            </div>
        </div>
    )
}

export default Hit
