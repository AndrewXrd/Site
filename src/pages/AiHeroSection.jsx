import React from "react";
import { Link } from "react-router-dom";

import heroImage from '../assets/ai_assets/Bg-hero.png';
import ghostLogo from '../assets/ai_assets/Frame 4.png';

const styles = {
  body: {
    backgroundColor: "#121415",
    width: "100%",
    minHeight: "100vh",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  heroSection: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute",
    top: 0,
    left: "-64px",
    width: "calc(100% + 64px)",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "none",
  },
  navbar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "32px 48px",
    gap: "48px",
    boxSizing: "border-box",
    zIndex: 10,
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },
  navLink: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    color: "rgba(203, 213, 225, 0.8)",
    letterSpacing: "-0.4px",
    textTransform: "lowercase",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  globeBtn: {
    width: "32px",
    height: "32px",
    flexShrink: 0,
    cursor: "pointer",
  },
  heroContent: {
    position: "absolute",
    bottom: "65px",
    left: 0,
    right: 0,
    padding: "0 48px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    zIndex: 5,
  },
  brandingCluster: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "600px",
  },
  heroName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: "144px",
    lineHeight: "122.4px",
    letterSpacing: "-7.2px",
    color: "#e2e2e3",
    textTransform: "lowercase",
    textShadow: "0px 0px 20px rgba(171, 205, 204, 0.3)",
    margin: 0,
    whiteSpace: "nowrap",
  },
  heroSubtitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 300,
    fontSize: "20px",
    letterSpacing: "0.5px",
    lineHeight: "28px",
  },
  subtitleText: {
    color: "#c2c7ca",
  },
  subtitleDot: {
    color: "#ffb68d",
    opacity: 0.5,
    fontSize: "20px",
    lineHeight: "28px",
  },
  glassCard: {
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    backgroundColor: "rgba(30, 32, 33, 0.6)",
    border: "1px solid rgba(66, 72, 74, 0.15)",
    borderRadius: "12px",
    padding: "33px",
    width: "453px",
    flexShrink: 0,
    boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
  },
  cardHeading: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    color: "#e2e2e3",
    margin: "0 0 8px 0",
  },
  cardBody: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#c2c7ca",
    margin: 0,
  },
};

export default function HeroSection() {
  return (
    <div style={styles.body}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@300&display=swap');
        a:hover { color: #e2e2e3 !important; }
      `}</style>

      <section style={styles.heroSection}>
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero background"
          style={styles.heroBg}
        />

        {/* Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.navLinks}>
            <Link to="/" state={{ targetId: 'about' }} style={styles.navLink}>about me</Link>
            <Link to="/AiProjectsPage" style={styles.navLink}>projects</Link>
            <Link to="/" state={{ targetId: 'contact' }} style={styles.navLink}>contact</Link>
          </div>
          <Link to="/"><img src={ghostLogo} alt="Ghost" style={styles.globeBtn} /></Link>
        </nav>

        {/* Hero Content */}
        <div style={styles.heroContent}>
          {/* Left: Name + Subtitle */}
          <div style={styles.brandingCluster}>
            <h1 style={styles.heroName}>andrew</h1>
            <div style={styles.heroSubtitle}>
              <span style={styles.subtitleText}>AI Image &amp; Video Creator</span>
              <span style={styles.subtitleDot}>·</span>
              <span style={styles.subtitleText}>Creative Visual Designer</span>
            </div>
          </div>

          {/* Right: Glass Card */}
          <div style={styles.glassCard}>
            <h2 style={styles.cardHeading}>Crafting Visuals That Convert</h2>
            <p style={styles.cardBody}>
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
