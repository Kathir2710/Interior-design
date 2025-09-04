import React from "react";
import illustration from "../Images/illustration.jpg";

export default function HeroSection() {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContainer}>
        
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Fund Administration <span style={styles.highlight}>Reimagined with</span> Technology{" "}
            {/* <b>Gravity-Group</b> */}
          </h1>
          <p style={styles.heroDesc}>
           By integrating advanced SaaS applications, 
           we offer an innovative and tailored approach to fund administration.
          </p>
          <button
           style={styles.heroBtn}>Get Started</button>
        </div>

        
        <div style={styles.heroImage}>
          <img src={illustration} alt="Marketing Illustration" style={styles.image} />
        </div>
      </div>
    </section>
  );
}

// ✅ Inline styles
const styles = {
  heroSection: {
    padding: "60px 80px",
    background: "#f9fafb",
  },
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  heroText: {
    flex: 1,
    minWidth: "300px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    lineHeight: 1.3,
    marginBottom: "20px",
    color: "#1a1a1a",
  },
  highlight: {
    color: "#ff3366",
    fontStyle: "italic",
  },
  heroDesc: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "500px",
  },
  heroBtn: {
    padding: "12px 24px",
    background: "#ff3366",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  heroImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "300px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  },
};
