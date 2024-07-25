import { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation()

    return (

        <header className="d-flex justify-content-center py-3 header mb-5">
            <ul className="nav nav-pills d-flex justify-content-center">
                <li className="nav-item">
                    <Link to="/"
                        className="nav-link d-flex align-items-center">
                        <div className={`me-2 ${location.pathname === '/' ? 'active' : ''}`}>1</div>
                        <p>Personal Details</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="summary"
                        className="nav-link d-flex align-items-center">
                        <div className={`me-2 ${location.pathname === '/summary' ? 'active' : ''}`}>2</div>
                        <p>Summary</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/skills"
                        className="nav-link d-flex align-items-center">
                        <div className={`me-2 ${location.pathname === '/skills' ? 'active' : ''}`}>3</div>
                        <p>Skills</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/experience"
                        className="nav-link d-flex align-items-center">
                        <div className={`me-2 ${location.pathname === '/experience' ? 'active' : ''}`}>4</div>
                        <p>Experience</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/education"
                        className="nav-link d-flex align-items-center">
                        <div className={`me-2 ${location.pathname === '/education' ? 'active' : ''}`}>5</div>
                        <p>Education</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/download"
                        className="nav-link d-flex align-items-center">
                        <div className={`me-2 ${location.pathname === '/download' ? 'active' : ''}`}>6</div>
                        <p>Download</p>
                    </Link>
                </li>
            </ul>
        </header>

    )
}

export default Header