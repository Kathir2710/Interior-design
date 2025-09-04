import React from "react";
import {
  Home,
  ClipboardList,
  MessageSquare,
  Users,
  Bell,
  FileText,
  Settings,
} from "lucide-react";

export default function NavBar({ activeMenu, setActiveMenu, isExpanded, setIsExpanded }) {
  const menus = [
    { key: "Project", icon: <Home size={18} /> },
    { key: "Task", icon: <ClipboardList size={18} /> },
    { key: "Chat", icon: <MessageSquare size={18} /> },
    { key: "People", icon: <Users size={18} /> },
    { key: "Alerts", icon: <Bell size={18} /> },
    { key: "Reports", icon: <FileText size={18} /> },
    { key: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="nav">
        {menus.map((m) => (
          <button
            key={m.key}
            className={`nav-btn ${activeMenu === m.key ? "active" : ""}`}
            onClick={() => setActiveMenu(m.key)}
          >
            {m.icon}
            {isExpanded && <span>{m.key}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
}
