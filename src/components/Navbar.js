import React from "react";
import logo from "../images/logo.svg";
import downArrow from "../images/icon-arrow-down.svg";
import upArrow from "../images/icon-arrow-up.svg";
import todoList from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close-menu.svg";
import { useState } from "react";

const Navbar = () => {
    const [dropDownFeature, setDorpDownFeature] = useState(false);
    const [dropDownCompany, setDorpDownCompany] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleFeatureClick = () => {
        setDorpDownFeature(!dropDownFeature);
    };
    const handleCompanyClick = () => {
        setDorpDownCompany(!dropDownCompany);
    };
    const handleClick = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <header className="section-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={toggleMenu ? "nav-elements mobile-view" : "nav-elements"}>
                <nav>
                    <ul className="nav-list">
                        <li className="features" onClick={handleFeatureClick}>
                            Features
                            <span className="dropdowns">
                                {dropDownFeature ? (
                                    <img className="arrow feature-arrow" src={upArrow} alt="up arrow" />
                                ) : (
                                    <img className="arrow feature-arrow" src={downArrow} alt="down arrow" />
                                )}
                            </span>
                            {dropDownFeature && (
                                <ul className="feature-dropdown">
                                    <li>
                                        <span className="inner-list">
                                            <img src={todoList} alt="todo list" />
                                        </span>
                                        Todo List
                                    </li>
                                    <li>
                                        <span className="inner-list">
                                            <img src={calender} alt="calender" />
                                        </span>
                                        Calender
                                    </li>
                                    <li>
                                        <span className="inner-list">
                                            <img src={reminder} alt="reminder" />
                                        </span>
                                        Reminder
                                    </li>
                                    <li>
                                        <span className="inner-list">
                                            <img src={planning} alt="planning" />
                                        </span>
                                        Planning
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="company" onClick={handleCompanyClick}>
                            Company{" "}
                            <span className="dropdowns">
                                {dropDownCompany ? (
                                    <img className="arrow company-arrow" src={upArrow} alt="up arrow" />
                                ) : (
                                    <img className="arrow company-arrow" src={downArrow} alt="down arrow" />
                                )}
                            </span>
                            {dropDownCompany && (
                                <ul className="company-dropdown">
                                    <li>History</li>
                                    <li>Our Team</li>
                                    <li>Blog</li>
                                </ul>
                            )}
                        </li>
                        <li>Career</li>
                        <li>About</li>
                    </ul>
                </nav>
                <div className="login-register">
                    <ul>
                        <li>Login</li>
                        <button>Register</button>
                    </ul>
                </div>
            </div>

            <div className="menu-icons" onClick={handleClick}>
                {toggleMenu ? (
                    <img src={closeIcon} alt="close icon" />
                ) : (
                    <img src={menuIcon} alt="menu icon" />
                )}
            </div>
        </header>
    );
};

export default Navbar;
