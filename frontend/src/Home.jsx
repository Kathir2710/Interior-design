import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoSlider from "./components/LogoSlider";
import LoginPanel from "./components/LoginPanel";
import Popup from "./components/Popup";
import "./styles/Home.css";
import "./styles/Login.css";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ✅ kept for UI only
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [step, setStep] = useState("select");
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setEmail("");
    setPassword("");
    setError("");

    if (option === "gravity" || option === "hedosophia") {
      setStep("login");
    }
  };

  const validateAndLogin = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    // ✅ Email domain validation only
    if (selectedOption === "gravity" && !email.endsWith("@gravity-groups.com")) {
      setError("Email must end with @gravity-groups.com");
      return;
    }

    if (
      selectedOption === "hedosophia" &&
      !email.endsWith("@hedosophia-group.com")
    ) {
      setError("Email must end with @hedosophia-group.com");
      return;
    }

    // ✅ Password ignored, just navigate
    navigate("/dashboard");
  };

  const handleOtherLogin = () => {
    if (!email) {
      setError("Please enter email or phone number.");
      return;
    }
    setError("");
    setPopup(true);
  };

  // ✅ Auto-close popup after 3 seconds
  useEffect(() => {
    let timer;
    if (popup) {
      timer = setTimeout(() => setPopup(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [popup]);

  return (
    <div className="home-container">
      <Header showLogin={showLogin} setShowLogin={setShowLogin} />

      {!showLogin && (
        <>
          <HeroSection />
          <LogoSlider />
        </>
      )}

      {showLogin && (
        <LoginPanel
          step={step}
          setStep={setStep}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          handleOptionChange={handleOptionChange}
          validateAndLogin={validateAndLogin}
          handleOtherLogin={handleOtherLogin}
        />
      )}

      {popup && <Popup />}
    </div>
  );
}
