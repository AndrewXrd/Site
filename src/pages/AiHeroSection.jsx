import React from "react";
import { Link } from "react-router-dom";

import heroImage from '../assets/ai_assets/Bg-hero.jpg';
import ghostLogo from '../assets/ai_assets/Frame 4.png';

const styles = {}; // Kept for safety if referenced elsewhere, but unused.

export default function HeroSection() {
  return (
    <div className="ai-hero-body">
      {/* Google Fonts & CSS Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@300&display=swap');
        
        .ai-hero-body {
          background-color: #121415;
          width: 100%;
          min-height: 100vh;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        
        .ai-hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        
        .ai-hero-bg {
          position: absolute;
          top: 0;
          left: -64px;
          width: calc(100% + 64px);
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        
        .ai-navbar {
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
        
        .ai-nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        
        .ai-nav-link {
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
        
        .ai-nav-link:hover {
          color: #e2e2e3 !important;
        }
        
        .ai-globe-btn {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          cursor: pointer;
        }
        
        .ai-hero-content {
          position: absolute;
          bottom: 65px;
          left: 0;
          right: 0;
          padding: 0 48px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 5;
        }
        
        .ai-branding-cluster {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 600px;
        }
        
        .ai-hero-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 144px;
          line-height: 122.4px;
          letter-spacing: -7.2px;
          color: #e2e2e3;
          text-transform: lowercase;
          text-shadow: 0px 0px 20px rgba(171, 205, 204, 0.3);
          margin: 0;
          white-space: nowrap;
        }
        
        .ai-hero-subtitle {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-weight: 300;
          font-size: 20px;
          letter-spacing: 0.5px;
          line-height: 28px;
        }
        
        .ai-subtitle-text {
          color: #c2c7ca;
        }
        
        .ai-subtitle-dot {
          color: #ffb68d;
          opacity: 0.5;
          font-size: 20px;
          line-height: 28px;
        }
        
        .ai-glass-card {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(30, 32, 33, 0.6);
          border: 1px solid rgba(66, 72, 74, 0.15);
          border-radius: 12px;
          padding: 33px;
          width: 453px;
          flex-shrink: 0;
          box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
          box-sizing: border-box;
        }
        
        .ai-card-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
          color: #e2e2e3;
          margin: 0 0 8px 0;
        }
        
        .ai-card-body {
          font-family: 'Manrope', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 26px;
          color: #c2c7ca;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .ai-hero-body {
            overflow-y: auto;
          }
          
          .ai-hero-section {
            height: auto;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          .ai-hero-bg {
            left: -15px;
            width: calc(100% + 15px);
            object-position: 25% center;
          }
          
          .ai-navbar {
            position: relative;
            height: auto;
            padding: 24px 20px;
            gap: 16px;
            justify-content: space-between;
          }
          
          .ai-nav-links {
            gap: 16px;
          }
          
          .ai-nav-link {
            font-size: 14px;
          }
          
          .ai-hero-content {
            position: relative;
            bottom: auto;
            padding: 12vh 20px 60px 20px;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: flex-start;
            gap: 60px;
            flex-grow: 1;
          }
          
          .ai-branding-cluster {
            align-items: center;
            text-align: center;
            width: 100%;
          }
          
          .ai-hero-name {
            font-size: 95px;
            line-height: 68px;
            letter-spacing: -3.2px;
            white-space: normal;
            margin-bottom: 8px;
          }
          
          .ai-hero-subtitle {
            flex-direction: column;
            align-items: center;
            gap: 6px;
          }
          
          .ai-subtitle-text {
            font-size: 16px;
            line-height: 20px;
          }
          
          .ai-subtitle-dot {
            display: none;
          }
          
          .ai-glass-card {
            width: 100%;
            padding: 24px;
            margin-top: 270px;
            text-align: left;
          }
          
          .ai-card-heading {
            font-size: 20px;
            line-height: 26px;
          }
          
          .ai-card-body {
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>

      <section className="ai-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero background"
          className="ai-hero-bg"
        />

        {/* Navbar */}
        <nav className="ai-navbar">
          <div className="ai-nav-links">
            <Link to="/" state={{ targetId: 'about' }} className="ai-nav-link">about me</Link>
            <Link to="/AiProjectsPage" className="ai-nav-link">projects</Link>
            <Link to="/" state={{ targetId: 'contact' }} className="ai-nav-link">contact</Link>
          </div>
          <Link to="/"><img src={ghostLogo} alt="Ghost" className="ai-globe-btn" /></Link>
        </nav>

        {/* Hero Content */}
        <div className="ai-hero-content">
          {/* Left: Name + Subtitle */}
          <div className="ai-branding-cluster">
            <h1 className="ai-hero-name">andrew</h1>
            <div className="ai-hero-subtitle">
              <span className="ai-subtitle-text">AI Image &amp; Video Creator</span>
              <span className="ai-subtitle-dot">·</span>
              <span className="ai-subtitle-text">Creative Visual Designer</span>
            </div>
          </div>

          {/* Right: Glass Card */}
          <div className="ai-glass-card">
            <h2 className="ai-card-heading">Crafting Visuals That Convert</h2>
            <p className="ai-card-body">
              Bridging the gap between generative AI and high-end cinematography.
              I create hyper-realistic imagery and atmospheric video sequences
              tailored for prestige brands.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
