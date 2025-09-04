import React from "react";

export default function Popup() {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="success-check">✔</div>
        <h3>Request Sent</h3>
        <p>
          Your email/phone has been sent for approval. You’ll be notified once
          approved.
        </p>
      </div>
    </div>
  );
}
