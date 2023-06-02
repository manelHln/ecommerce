import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navConfig } from "../../dummyData";
import "./sidebar.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow((prev) => !prev);
  return (
    <aside
      className="main-sidebar"
      style={{
        width: `${show ? "10%" : "50px"}`,
        height: `calc(100vh - 60px)`,
      }}
    >
      <div className="main-navbar">
        <div className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
          <div
            className="navbar-brand w-100 mr-0"
            style={{ lineHeight: "25px" }}
          >
            <div
              className="d-table m-auto"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-bars" />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-wrapper">
        <ul className="nav flex-column">
          {navConfig.map(navItem => (
            <li key={navItem.title} className={`nav-link align-items-center ${show ? "" : "py-2 px-3"}`}>
              <NavLink to={navItem.path}>
                {navItem.icon}
                <span className={` ${show ? "ml-1" : ""}`}>
                {show ? navItem.title : ""}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
