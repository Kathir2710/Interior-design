import React from "react";

export default function SubNav({
  activeMenu,
  activeSubmenu,
  setActiveSubmenu,
  taskFilter,
  setTaskFilter,
}) {
  return (
    <aside className="second-nav">
      {/* Project Submenu */}
      {activeMenu === "Project" && (
        <>
          <button
            className={`filter-btn ${activeSubmenu === "Ongoing" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Ongoing")}
          >
            Ongoing
          </button>
          <button
            className={`filter-btn ${activeSubmenu === "Completed" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Completed")}
          >
            Completed
          </button>
        </>
      )}

      {/* Task Submenu */}
      {activeMenu === "Task" && (
        <select
          value={taskFilter}
          onChange={(e) => setTaskFilter(e.target.value)}
          className="dropdown-filter"
        >
          <option value="All">All</option>
          <option value="Priority">Priority</option>
          <option value="Normal">Normal</option>
        </select>
      )}

      {/* Chat Submenu */}
      {activeMenu === "Chat" && (
        <>
          <button
            className={`filter-btn ${activeSubmenu === "Team" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Team")}
          >
            Team
          </button>
          <button
            className={`filter-btn ${activeSubmenu === "Personal" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Personal")}
          >
            Personal
          </button>
        </>
      )}

      {/* People Submenu */}
      {activeMenu === "People" && (
        <>
          <button
            className={`filter-btn ${activeSubmenu === "Employees" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Employees")}
          >
            Employees
          </button>
          <button
            className={`filter-btn ${activeSubmenu === "Users" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Users")}
          >
            Users
          </button>
        </>
      )}

      {/* Alerts Submenu */}
      {activeMenu === "Alerts" && (
        <button
          className={`filter-btn ${activeSubmenu === "Halo" ? "active" : ""}`}
          onClick={() => setActiveSubmenu("Halo")}
        >
          Tickets
        </button>
      )}

      {/* Settings Submenu */}
      {activeMenu === "Settings" && (
        <button
          className={`filter-btn ${activeSubmenu === "Halo" ? "active" : ""}`}
          onClick={() => setActiveSubmenu("Halo")}
        >
          System Configuration
        </button>
      )}

      {/* Reports Submenu */}
      {activeMenu === "Reports" && (
        <>
        {/* <button
            className={`filter-btn ${activeSubmenu === "Power BI Dashboard" ? "active" : ""}`}
            // onClick={() => setActiveSubmenu("Power BI Dashboard")}
          >
            Reports & Analysis
          </button> */}
          <button
            className={`filter-btn ${activeSubmenu === "Power BI Dashboard" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Power BI Dashboard")}
          >
            Power BI Dashboard
          </button>
          <button
            className={`filter-btn ${activeSubmenu === "Power BI Report" ? "active" : ""}`}
            onClick={() => setActiveSubmenu("Power BI Report")}
          >
            Power BI Report
          </button>
        </>
      )}
    </aside>
  );
}
