import React, { useState } from "react";
import { Link } from "react-router-dom";
import ghostLogo from '../assets/ai_assets/Frame 4.png';

// --- Asset Imports ---
import bgImage from '../assets/ai_assets/Bg-project.jpg';
import imgWeddingDeco1 from '../assets/ai_assets/deco1.jpg'
import imgWeddingDeco2 from '../assets/ai_assets/deco2.jpg'
import imgWeddingInput from '../assets/ai_assets/img1.jpg';
import imgWeddingOutput1 from '../assets/ai_assets/img2.jpg';
import imgWeddingOutput2 from '../assets/ai_assets/img3.jpg';
import mammaInput from '../assets/ai_assets/mammaInput.jpeg';
import mammaOutput1 from '../assets/ai_assets/mammaOutputImg.png';
import mammaOutput2 from '../assets/ai_assets/mammaVideo.gif';

const arrowCircle = "https://placehold.co/100x100/transparent/ffffff?text=Circle";
const arrowIcon = "https://placehold.co/100x100/transparent/ffffff?text=Arrow";

// --- Projects Data ---
const projects = [
  {
    id: 1,
    title: "Outdoor Wedding Decoration",
    description:
      "I designed a outdoor wedding decoration for client based on their requirements. The event occurred in Prashandi Grand Hotel, Gonapola.",
    tools: "Loveart ai, Google Nano Banana Pro",
    images: [
      { src: imgWeddingDeco1, label: "Decoration #1 (AI Generated)" },
      { src: imgWeddingDeco2, label: "Decoration #2 (AI Generated)" },
      { src: imgWeddingInput, label: "Input - Actual image of place" },
      { src: imgWeddingOutput1, label: "Output #1" },
      { src: imgWeddingOutput2, label: "Output #2" },
    ],
  },
  {
    id: 2,
    title: "Video of Late Grandfather",
    description:
      "I generate a video of late grandfather wishing bride for her marriage life.",
    tools: "Google Nano Banana Pro, Hey Gen ai, Elevanlabs ai",
    images: [
      { src: mammaInput, label: "Input" },
      { src: mammaOutput1, label: "AI Generated Image" },
      { src: mammaOutput2, label: "AI Generated Video" },
    ],
  },
];

// --- Styles ---
const styles = {}; // Kept for safety if referenced elsewhere, but unused.

export default function ProjectsPage() {
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <div className="ai-proj-page">
      {/* Google Fonts & CSS Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@300&display=swap');
        
        .ai-proj-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #121415;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
        }
        
        .ai-proj-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          pointer-events: none;
          z-index: 0;
        }
        
        .ai-proj-navbar {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 32px 48px;
          gap: 48px;
          box-sizing: border-box;
          z-index: 10;
        }
        
        .ai-proj-nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        
        .ai-proj-nav-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: rgba(203, 213, 225, 0.8);
          letter-spacing: -0.4px;
          text-transform: lowercase;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .ai-proj-nav-link:hover {
          color: #e2e2e3 !important;
        }
        
        .ai-proj-globe-btn {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          cursor: pointer;
        }
        
        .ai-proj-content {
          position: relative;
          z-index: 1;
          padding: 120px 51px 80px;
        }
        
        .ai-proj-page-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 120px;
          line-height: 122.4px;
          letter-spacing: -7.2px;
          color: #ffffff;
          text-transform: lowercase;
          margin: 0 0 48px 0;
        }
        
        .ai-proj-block {
          margin-bottom: 64px;
        }
        
        .ai-proj-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 30px;
          line-height: 30px;
          color: #ffffff;
          margin: 0 0 12px 0;
        }
        
        .ai-proj-desc {
          font-family: 'Manrope', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 26px;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        
        .ai-proj-tools {
          font-family: 'Manrope', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 26px;
          color: #ffffff;
          margin: 0 0 24px 0;
        }
        
        .ai-proj-images-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          position: relative;
        }
        
        .ai-proj-images-row-stretch {
          display: flex;
          gap: 12px;
          align-items: stretch;
          position: relative;
        }
        
        .ai-proj-image-wrapper {
          position: relative;
          flex-shrink: 0;
        }
        
        .ai-proj-image-wrapper-flex {
          position: relative;
          flex: 1;
        }
        
        .ai-proj-image {
          width: 100%;
          height: 259px;
          object-fit: cover;
          display: block;
          border-radius: 4px;
        }
        
        .ai-proj-image-label {
          margin-top: 8px;
          font-family: 'Manrope', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 26px;
          color: #ffffff;
        }
        
        .ai-proj-arrow-btn {
          position: absolute;
          right: -20px;
          top: 50%;
          width: 86px;
          height: 86px;
          cursor: pointer;
          z-index: 2;
          transition: transform 0.2s ease;
        }
        
        .ai-proj-arrow-bg-img {
          position: absolute;
          inset: 9px 9px 9px 9px;
          width: 67px;
          height: 67px;
          pointer-events: none;
        }
        
        .ai-proj-arrow-icon-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform: rotate(180deg) scaleY(-1);
          pointer-events: none;
        }
        
        @media (max-width: 768px) {
          .ai-proj-navbar {
            position: relative;
            height: auto;
            padding: 24px 20px;
            gap: 16px;
            justify-content: space-between;
          }
          
          .ai-proj-nav-links {
            gap: 16px;
          }
          
          .ai-proj-nav-link {
            font-size: 14px;
          }
          
          .ai-proj-content {
            padding: 40px 20px 60px 20px;
          }
          
          .ai-proj-page-title {
            font-size: 40px;
            line-height: 44px;
            letter-spacing: -2px;
            margin-bottom: 24px;
          }
          
          .ai-proj-title {
            font-size: 20px;
            line-height: 24px;
          }
          
          .ai-proj-desc, .ai-proj-tools {
            font-size: 14px;
            line-height: 22px;
          }
          
          .ai-proj-images-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 20px !important;
            overflow-x: visible !important;
          }
          
          .ai-proj-image-wrapper-scroll {
            width: 100% !important;
          }
          
          .ai-proj-images-row-stretch {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }
          
          .ai-proj-image-wrapper-flex {
            width: 100%;
          }
          
          .ai-proj-image {
            height: auto;
            max-height: 250px;
          }
        }
      `}</style>

      {/* Background */}
      <img src={bgImage} alt="" className="ai-proj-bg" />

      {/* Navbar */}
      <nav className="ai-proj-navbar">
        <div className="ai-proj-nav-links">
          <Link to="/" state={{ targetId: 'about' }} className="ai-proj-nav-link">about me</Link>
          <Link to="/" state={{ targetId: 'projects' }} className="ai-proj-nav-link">projects</Link>
          <Link to="/" state={{ targetId: 'contact' }} className="ai-proj-nav-link">contact</Link>
        </div>
        <Link to="/AiHeroSection"><img src={ghostLogo} alt="Ghost" className="ai-proj-globe-btn" /></Link>
      </nav>

      {/* Page Content */}
      <div className="ai-proj-content">
        {/* Page Title */}
        <h1 className="ai-proj-page-title">projects</h1>

        {/* Project 1 — Outdoor Wedding Decoration */}
        <div className="ai-proj-block">
          <h2 className="ai-proj-title">Outdoor Wedding Decoration</h2>
          <p className="ai-proj-desc">
            I designed a outdoor wedding decoration for the client based
            on their requirements. The event occurred in Prashandi Grand Hotel,
            Gonapola.
          </p>
          <p className="ai-proj-tools">
            Tool - Loveart ai, Google Nano Banana Pro
          </p>

          {/* Images Row */}
          <div className="ai-proj-images-row" style={{ overflowX: "auto", paddingBottom: "24px" }}>
            {projects[0].images.map((img, index) => (
              <div key={index} className="ai-proj-image-wrapper ai-proj-image-wrapper-scroll" style={{ width: "450px", flexShrink: 0, position: "relative" }}>
                <img
                  src={img.src}
                  alt={img.label}
                  className="ai-proj-image"
                />
                <p className="ai-proj-image-label">{img.label}</p>

                {/* Arrow Button on the last image */}
                {index === projects[0].images.length - 1 && (
                  <div
                    className="ai-proj-arrow-btn"
                    style={{
                      transform: arrowHovered
                        ? "translateY(-80%) scale(1.08)"
                        : "translateY(-80%)",
                    }}
                    onMouseEnter={() => setArrowHovered(true)}
                    onMouseLeave={() => setArrowHovered(false)}
                  >
                    <img src={arrowCircle} alt="" className="ai-proj-arrow-bg-img" />
                    <img src={arrowIcon} alt="Next" className="ai-proj-arrow-icon-img" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project 2 — Video of Late Grandfather */}
        <div className="ai-proj-block">
          <h2 className="ai-proj-title">Video of Late Grandfather</h2>
          <p className="ai-proj-desc">
            I generate a video of late grandfather wishing bride for her
            marriage life.
          </p>
          <p className="ai-proj-tools">
            Tool - Google Nano Banana Pro, Hey Gen ai, Elevanlabs ai
          </p>

          <div className="ai-proj-images-row-stretch">
            <div className="ai-proj-image-wrapper-flex">
              <img src={mammaInput} alt="Input" className="ai-proj-image" style={{ objectFit: "contain", height: "300px", backgroundColor: "rgba(0,0,0,0.3)" }} />
              <p className="ai-proj-image-label">Input</p>
            </div>
            <div className="ai-proj-image-wrapper-flex">
              <img src={mammaOutput1} alt="AI Generated Image" className="ai-proj-image" style={{ objectFit: "contain", height: "300px", backgroundColor: "rgba(0,0,0,0.3)" }} />
              <p className="ai-proj-image-label">AI Generated Image</p>
            </div>
            <div className="ai-proj-image-wrapper-flex">
              <img src={mammaOutput2} alt="AI Generated Video" className="ai-proj-image" style={{ objectFit: "contain", height: "300px", backgroundColor: "rgba(0,0,0,0.3)" }} />
              <p className="ai-proj-image-label">AI Generated Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
