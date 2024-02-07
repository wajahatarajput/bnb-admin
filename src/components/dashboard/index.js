import React from 'react';
import { useState } from 'react';
import './style.css'

function Dashboard({ children }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleAvatarClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Your logout logic here
    };

    return (
        <div className="container-fluid vh-100 d-flex flex-column p-0">
            {/* Topbar */}
            <div className="bg-purple" style={{ height: '10%' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center py-2">
                    <div>
                        {/* Logged in user avatar */}
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Avatar"
                            className="rounded-circle me-2"
                            onClick={handleAvatarClick}
                            style={{ cursor: 'pointer' }}
                        />
                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div className="dropdown" style={{ position: 'absolute', right: '1rem' }}>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" onClick={handleLogout} href="#">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sidebar and Main Panel */}
            <div className="d-flex flex-grow-1">
                {/* Sidebar */}
                <div
                    className="bg-purple text-light d-md-flex d-none"
                    style={{ width: '20%' }}
                >
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Main Panel */}
                <div className="flex-grow-1 justify-content-center align-items-center">
                    {/* Your content goes here */}
                    {children}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-purple" style={{ height: '10%' }}>
                {/* Footer content goes here */}
                Footer
            </div>
        </div>
    );
}

export default Dashboard;
