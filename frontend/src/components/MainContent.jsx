import React from "react";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardImg from "../Images/dashboard.png"; // ✅ Import your image

export default function MainContent({
  activeMenu,
  activeSubmenu,
  filteredTasks,
  chatMessages,
  newMsg,
  setNewMsg,
  handleSendMessage,
  ticketForm,
  setTicketForm,
  handleRaiseTicket,
  isSending,
}) {
  const navigate = useNavigate();

  return (
    <main className="main">
      <div className="content">
        {/* PROJECTS */}
        {activeMenu === "Project" && activeSubmenu === "Ongoing" && (
          <div className="project-list" style={{ width: "100%" }}>
            {/* Header */}
            <h2
              className="project-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 16px",
                fontFamily: "sans-serif",
                borderBottom: "2px solid #ddd",
                fontWeight: "600",
                background: "#100f0fff",
                color: "white",
              }}
            >
              <span>Project</span>
              <span>Status</span>
            </h2>

            {/* Project Cards */}
            <div
              className="project-card"
              onClick={() => navigate("/review-payment")}
              style={{
                background: "black",
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 16px",
                // borderBottom: "1px solid #eee",
                cursor: "pointer",
                transition: "background 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8f8b8dff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "black")}
            >
              <span className="project-title">Yooz to Fiz</span>
              <span className="project-status">In Progress</span>
            </div>

            <div
              className="project-card"
              onClick={() => navigate("/payment")}
              style={{
                background: "black",
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 16px",
                // borderBottom: "1px solid #eee",
                cursor: "pointer",
                transition: "background 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8f8b8dff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "black")}
            >
              <span className="project-title">Fiz to Hzt</span>
              <span className="project-status">In Progress</span>
            </div>
          </div>
        )}

        {/* TASKS */}
        {activeMenu === "Task" &&
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="task-row"
              style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "black", color: "white" }}
            >
              <span className="task-title"
              
              >{task.title}</span>
              <span className={`task-type ${task.type}`}>{task.type}</span>
            </div>
          ))}

        {/* CHAT */}
        {activeMenu === "Chat" && (
          <div className="chat-ui" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
            <div
              className="chat-messages"
              style={{ flex: 1, overflowY: "auto", padding: "10px", border: "1px solid #0f0e0eff" }}
            >
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chat-msg ${msg.type}`}
                  style={{ marginBottom: "10px", textAlign: msg.type === "outgoing" ? "right" : "left" }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input" style={{ display: "flex", padding: "10px", borderTop: "1px solid #0c0c0cff" }}>
              <input
                type="text"
                placeholder="Type a message..."
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                style={{ flex: 1, marginRight: "10px" }}
              />
              <button onClick={handleSendMessage}>
                <Send size={18} />
              </button>
            </div>
          </div>
        )}

                {activeMenu === "People" && activeSubmenu && (
            <div
                className="profile-container"
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
                padding: "20px",
                background: "#000",
                }}
            >
                {[...Array(12)].map((_, id) => (
                <div
                    key={id}
                    className="profile-card"
                    style={{
                    background: "#111",
                    borderRadius: "20px",
                    padding: "20px",
                    position: "relative",
                    textAlign: "center",
                    color: "white",
                    }}
                >
                    {/* Photo wrapper for positioning badge */}
                    <div style={{ position: "relative" }}>
                    <img
                        src={`https://i.pravatar.cc/250?img=${id + 10}`}
                        alt="Profile"
                        className="profile-img"
                        style={{
                        borderRadius: "20px",
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        }}
                    />

                    {/* LinkedIn Badge - pinned bottom-left */}
                    <div
                        style={{
                        position: "absolute",
                        bottom: "10px", // ✅ flush with bottom
                        // left: "10px",   // ✅ flush with left
                        background: "#eaff00",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "16px",
                        }}
                    >
                        in
                    </div>
                    </div>

                    {/* Info */}
                    <div style={{ marginTop: "15px" }}>
                    <h4 style={{ margin: "10px 0 5px 0", fontSize: "18px" }}>
                        Person {id + 1}
                    </h4>
                    <p style={{ fontSize: "14px", color: "#aaa" }}>Position: Developer</p>
                    <p style={{ fontSize: "14px", fontWeight: "bold", color: "#d1ff00" }}>
                        Joining: 2023-0{id + 1}-15
                    </p>
                    </div>
                </div>
                ))}
            </div>
            )}

        {/* ALERTS → HALO FORM */}
        {activeMenu === "Alerts" && activeSubmenu === "Halo" && (
          <div className="ticket-form">
            {/* <h2 className="ticket">Raise Ticket</h2> */}
            <input
              type="text"
              placeholder="Name"
              className="Value"
              value={ticketForm.name}
              onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
            />
            <input
            className="Value"
              type="email"
              placeholder="Email"
              
              value={ticketForm.email}
              onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
            />
            <select
              className="Value"
              value={ticketForm.priority}
              onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
            >
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <input
              type="text"
              placeholder="Short Summary"
              className="Value"
              value={ticketForm.summary}
              onChange={(e) => setTicketForm({ ...ticketForm, summary: e.target.value })}
            />
            <textarea
              placeholder="Brief Description"

              value={ticketForm.description}
              onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
            ></textarea>
            <button
              className={`raise-btn ${isSending ? "sending" : ""}`}
              onClick={handleRaiseTicket}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Raise Ticket"}
            </button>
          </div>
        )}
{/* SETTINGS */}
        {activeMenu === "Settings" && activeSubmenu === "Halo" && (
          <div
            className="settings-content"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flex: 1,
              width: "100%",       // ✅ take full width
              height: "100%",      // ✅ fill parent height
              background: "#0f0e0e",
              padding: "15px",
              borderRadius: "8px",
              // border: "1px solid white", // fixed border syntax
              boxShadow: "0 2px 6px rgba(245, 242, 242, 0.1)",
              color: "white",
            }}
          >
            {/* Single Row for each setting */}
            {[
              "Brightness",
              "Theme (Dark/Light)",
              "Chat Wallpaper",
              "Notifications",
            ].map((setting, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 10px",
                  borderBottom: "1px solid #333",
                }}
              >
                {/* Setting Name (left side) */}
                <span style={{ fontSize: "16px" }}>{setting}</span>

                {/* Toggle (right side) */}
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
          </div>
        )}



        {/* REPORTS */}
        {activeMenu === "Reports" && activeSubmenu === "Power BI Dashboard" && (
          <div className="reports-content" style={{ textAlign: "center", padding: "20px" }}>
            <img
              src={DashboardImg}
              alt="Dashboard Report"
              style={{ width: "90%", borderRadius: "10px", marginTop: "20px" }}
            />
          </div>
        )}

        {activeMenu === "Reports" && activeSubmenu === "Power BI Report" && (
          <div className="reports-list">
    <div className="report-row">
      <span className="report-name">Monthly Report</span>
      <span className="report-date">2025-08-26</span>
      <span className="report-status completed">Completed</span>
      <button>View</button>
    </div>

    <div className="report-row">
      <span className="report-name">Weekly Report</span>
      <span className="report-date">2025-08-20</span>
      <span className="report-status pending">Pending</span>
      <button>Download</button>
    </div>
  </div>

        )}
      </div>
    </main>
  );
}
