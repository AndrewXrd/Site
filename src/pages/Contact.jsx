import '../css/Contact.css';
import ghostLogo from '../assets/Ghost.png';

function Contact() {
    return (
        <div className="contact-container">
            <p className="title-contact">Contact</p>

            <div className="contact-content">
                <div className="contact-left">
                    <img src={ghostLogo} alt="Ghost-Logo" className="ghost-logo" />
                    {/* <p className="ghost-name">Ghost</p> */}
                </div>

                <div className="contact-right">
                    <div className="social-item">
                        <div className="social-icon linkedin"></div>
                        <a href="https://www.linkedin.com/in/anton-ignacious-andrew-4a95042b2/" target="_blank" rel="noopener noreferrer">
                            Anton Ignacious Andrew
                        </a>
                    </div>

                    <div className="social-item">
                        <div className="social-icon email"></div>
                        <a href="mailto:andrewkavin30@gmail.com">
                            andrewkavin30@gmail.com
                        </a>
                    </div>

                    <div className="social-item">
                        <div className="social-icon github"></div>
                        <a href="https://github.com/AndrewXrd" target="_blank" rel="noopener noreferrer">
                            AndrewXrd
                        </a>
                    </div>

                    <div className="social-item">
                        <div className="social-icon instagram"></div>
                        <a href="https://www.instagram.com/andrew_xrd" target="_blank" rel="noopener noreferrer">
                            andrew_xrd / Ghost
                        </a>
                    </div>

                    <div className="social-item">
                        <div className="social-icon facebook"></div>
                        <a href="https://www.facebook.com/AndrewXrd" target="_blank" rel="noopener noreferrer">
                            Andrew Xrd
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;