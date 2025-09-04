import React, { useState } from "react";
import { Sun, Moon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import SubNav from "./components/SubNav";
import MainContent from "./components/MainContent";
import GravityLogo from "./Images/Image3.png";
import "./Dashboard.css";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [taskFilter, setTaskFilter] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hello! How are you?", type: "incoming" },
    { id: 2, text: "I'm good, thanks! How about you?", type: "outgoing" },
  ]);
  const [newMsg, setNewMsg] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    priority: "Normal",
    summary: "",
    description: "",
  });

  const navigate = useNavigate();

  // Demo tasks
  const tasks = [
    { id: 1, title: "Fix login bug", type: "Priority" },
    { id: 2, title: "Update dashboard UI", type: "Normal" },
    { id: 3, title: "Write API docs", type: "Normal" },
    { id: 4, title: "Resolve security issue", type: "Priority" },
  ];
  const filteredTasks =
    taskFilter === "All" ? tasks : tasks.filter((t) => t.type === taskFilter);

  const handleSendMessage = () => {
    if (newMsg.trim() === "") return;
    setChatMessages([
      ...chatMessages,
      { id: chatMessages.length + 1, text: newMsg, type: "outgoing" },
    ]);
    setNewMsg("");
  };

  const handleRaiseTicket = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert("Ticket Raised Successfully!");
      setTicketForm({
        name: "",
        email: "",
        priority: "Normal",
        summary: "",
        description: "",
      });
    }, 2000);
  };

  return (
    <div className={`dashboard-page ${theme}`}>
      {/* Header */}
      <header className="topbar">
        <img src={GravityLogo} alt="Logo" className="logo" />
        <div className="header-actions">
          {/* Theme Toggle */}
          <button
            className="theme-btn btn-3d"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Logout */}
          <button className="logout-btn btn-3d" onClick={() => navigate("/home")} title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div className="main-container">
        <NavBar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />

        {activeMenu && (
          <SubNav
            activeMenu={activeMenu}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
            taskFilter={taskFilter}
            setTaskFilter={setTaskFilter}
          />
        )}

        <MainContent
          activeMenu={activeMenu}
          activeSubmenu={activeSubmenu}
          tasks={tasks}
          filteredTasks={filteredTasks}
          chatMessages={chatMessages}
          newMsg={newMsg}
          setNewMsg={setNewMsg}
          handleSendMessage={handleSendMessage}
          ticketForm={ticketForm}
          setTicketForm={setTicketForm}
          handleRaiseTicket={handleRaiseTicket}
          isSending={isSending}
        />
      </div>
    </div>
  );
}
