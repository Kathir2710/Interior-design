import React from "react";

export default function LoginPanel({
  step,
  selectedOption,
  email,
  password,
  setEmail,
  setPassword,
  error,
  handleOptionChange,
  validateAndLogin,
  handleOtherLogin,
  setStep,
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "95%",
        minHeight: "85vh",
        borderRadius: "20px",
        margin: "20px auto",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        background: "#fff",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background:
            step === "select"
              ? "linear-gradient(135deg, #667eea, #764ba2)"
              : "#f0f6ff",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {step === "select" ? (
          <>
            <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
              Gravity & Hedosophia Platform
            </h1>
            <p style={{ fontSize: "1rem", maxWidth: "350px" }}>
              A secure login system for managing your projects, workflows and
              team collaboration.
            </p>
            {/* Two Avatars */}
            <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-3d-avatar-6299537-5187871.png"
                alt="Avatar1"
                style={{ width: "100px", borderRadius: "50%" }}
              />
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/businesswoman-3d-avatar-6299536-5187870.png"
                alt="Avatar2"
                style={{ width: "100px", borderRadius: "50%" }}
              />
            </div>
          </>
        ) : (
          <img
            src="https://st2.depositphotos.com/1051392/9518/i/450/depositphotos_95189254-stock-photo-3d-man-holding-and-looking.jpg"
            alt="Shield"
            style={{
              borderRadius: "20px",
              maxWidth: "70%",
              marginLeft: "40px",
            }}
          />
        )}
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f9f9f9",
          position: "relative",
        }}
      >
        {step === "select" ? (
          <>
            {/* 3D animation above email input */}
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/email-marketing-3d-icon-6299532-5187866.png"
              alt="3D Animation"
              style={{ width: "120px", marginBottom: "20px" }}
            />

            <button
              style={btnStyle("#667eea")}
              onClick={() => handleOptionChange("gravity")}
            >
              Continue with Gravity-Groups
            </button>
            <button
              style={btnStyle("#764ba2")}
              onClick={() => handleOptionChange("hedosophia")}
            >
              Continue with Hedosophia Ltd
            </button>

            <div
              style={{
                margin: "20px 0",
                textAlign: "center",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              OR
            </div>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter new phone number or email"
              style={inputStyle}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button style={btnStyle("#f4a261")} onClick={handleOtherLogin}>
              Continue
            </button>
          </>
        ) : (
          <>
            {/* Back Button */}
            <button
              onClick={() => setStep("select")}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#333",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ⬅ Back
            </button>

            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/login-verification-3d-icon-6299535-5187869.png"
              alt="3D Animation"
              style={{ width: "120px", marginBottom: "20px" }}
            />
            <h2 style={{ marginBottom: "20px" }}>
              Login with{" "}
              {selectedOption === "gravity" ? "Gravity-Groups" : "Hedosophia"}
            </h2>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                selectedOption === "gravity"
                  ? "Enter your @gravity-groups.com email"
                  : "Enter your @hedosophia-group.com email"
              }
              style={inputStyle}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={inputStyle}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              style={btnStyle("#e76f51")}
              onClick={validateAndLogin}
              disabled={!email || !password} // ✅ Both must be filled
            >
              Login Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ✅ Button Style
const btnStyle = (color) => ({
  background: color,
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "12px 20px",
  marginBottom: "15px",
  width: "100%",
  cursor: "pointer",
  fontSize: "1rem",
});

// ✅ Input Style
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem",
};
