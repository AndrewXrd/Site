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
const styles = {
  page: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#121415",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    overflow: "hidden",
  },
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    pointerEvents: "none",
    zIndex: 0,
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
  content: {
    position: "relative",
    zIndex: 1,
    padding: "120px 51px 80px",
  },
  pageTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: "120px",
    lineHeight: "122.4px",
    letterSpacing: "-7.2px",
    color: "#ffffff",
    textTransform: "lowercase",
    margin: "0 0 48px 0",
  },
  projectBlock: {
    marginBottom: "64px",
  },
  projectTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "30px",
    color: "#ffffff",
    margin: "0 0 12px 0",
  },
  projectDesc: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#ffffff",
    margin: "0 0 4px 0",
  },
  projectTools: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#ffffff",
    margin: "0 0 24px 0",
  },
  imagesRow: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    flexShrink: 0,
  },
  projectImage: {
    width: "100%",
    height: "259px",
    objectFit: "cover",
    display: "block",
    borderRadius: "4px",
  },
  imageLabel: {
    marginTop: "8px",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#ffffff",
  },
  arrowBtn: {
    position: "absolute",
    right: "-20px",
    top: "50%",
    transform: "translateY(-80%)",
    width: "86px",
    height: "86px",
    cursor: "pointer",
    zIndex: 2,
    transition: "transform 0.2s ease",
  },
  arrowBgImg: {
    position: "absolute",
    inset: "9px 9px 9px 9px",
    width: "67px",
    height: "67px",
    pointerEvents: "none",
  },
  arrowIconImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    transform: "rotate(180deg) scaleY(-1)",
    pointerEvents: "none",
  },
};

export default function ProjectsPage() {
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <div style={styles.page}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@300&display=swap');
        a:hover { color: #e2e2e3 !important; }
      `}</style>

      {/* Background */}
      <img src={bgImage} alt="" style={styles.bg} />

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLinks}>
          <Link to="/" state={{ targetId: 'about' }} style={styles.navLink}>about me</Link>
          <Link to="/" state={{ targetId: 'projects' }} style={styles.navLink}>projects</Link>
          <Link to="/" state={{ targetId: 'contact' }} style={styles.navLink}>contact</Link>
        </div>
        <Link to="/AiHeroSection"><img src={ghostLogo} alt="Ghost" style={styles.globeBtn} /></Link>
      </nav>

      {/* Page Content */}
      <div style={styles.content}>
        {/* Page Title */}
        <h1 style={styles.pageTitle}>projects</h1>

        {/* Project 1 — Outdoor Wedding Decoration */}
        <div style={styles.projectBlock}>
          <h2 style={styles.projectTitle}>Outdoor Wedding Decoration</h2>
          <p style={styles.projectDesc}>
            I designed a outdoor wedding decoration for the client based
            on their requirements. The event occurred in Prashandi Grand Hotel,
            Gonapola.
          </p>
          <p style={styles.projectTools}>
            Tool - Loveart ai, Google Nano Banana Pro
          </p>

          {/* Images Row */}
          <div style={{ ...styles.imagesRow, overflowX: "auto", paddingBottom: "24px" }}>
            {projects[0].images.map((img, index) => (
              <div key={index} style={{ ...styles.imageWrapper, width: "450px", flexShrink: 0, position: "relative" }}>
                <img
                  src={img.src}
                  alt={img.label}
                  style={styles.projectImage}
                />
                <p style={styles.imageLabel}>{img.label}</p>

                {/* Arrow Button on the last image */}
                {index === projects[0].images.length - 1 && (
                  <div
                    style={{
                      ...styles.arrowBtn,
                      transform: arrowHovered
                        ? "translateY(-80%) scale(1.08)"
                        : "translateY(-80%)",
                    }}
                    onMouseEnter={() => setArrowHovered(true)}
                    onMouseLeave={() => setArrowHovered(false)}
                  >
                    <img src={arrowCircle} alt="" style={styles.arrowBgImg} />
                    <img src={arrowIcon} alt="Next" style={styles.arrowIconImg} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project 2 — Video of Late Grandfather */}
        <div style={styles.projectBlock}>
          <h2 style={styles.projectTitle}>Video of Late Grandfather</h2>
          <p style={styles.projectDesc}>
            I generate a video of late grandfather wishing bride for her
            marriage life.
          </p>
          <p style={styles.projectTools}>
            Tool - Google Nano Banana Pro, Hey Gen ai, Elevanlabs ai
          </p>

          <div style={{ ...styles.imagesRow, alignItems: "stretch" }}>
            <div style={{ ...styles.imageWrapper, flex: 1 }}>
              <img src={mammaInput} alt="Input" style={{ ...styles.projectImage, objectFit: "contain", height: "300px", backgroundColor: "rgba(0,0,0,0.3)" }} />
              <p style={styles.imageLabel}>Input</p>
            </div>
            <div style={{ ...styles.imageWrapper, flex: 1 }}>
              <img src={mammaOutput1} alt="AI Generated Image" style={{ ...styles.projectImage, objectFit: "contain", height: "300px", backgroundColor: "rgba(0,0,0,0.3)" }} />
              <p style={styles.imageLabel}>AI Generated Image</p>
            </div>
            <div style={{ ...styles.imageWrapper, flex: 1 }}>
              <img src={mammaOutput2} alt="AI Generated Video" style={{ ...styles.projectImage, objectFit: "contain", height: "300px", backgroundColor: "rgba(0,0,0,0.3)" }} />
              <p style={styles.imageLabel}>AI Generated Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
