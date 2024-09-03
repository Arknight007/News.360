import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        const navStyle = {
            backgroundColor: '#343a40',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        };

        const brandStyle = {
            color: '#ff6347',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
        };

        const linkStyle = {
            color: '#f8f9fa',
            fontSize: '1.1rem',
            textDecoration: 'none',
            marginRight: '10px',
        };

        const searchButtonStyle = {
            backgroundColor: '#ff6347',
            color: '#fff',
            borderColor: '#ff6347',
        };

        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={navStyle}>
                    <Link className="navbar-brand" to="/" style={brandStyle}>
                    NEWS.360°
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" style={linkStyle}>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/business" style={linkStyle}>Business</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/entertainment" style={linkStyle}>Entertainment</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/general" style={linkStyle}>General</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/health" style={linkStyle}>Health</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/science" style={linkStyle}>Science</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/sports" style={linkStyle}>Sports</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/technology" style={linkStyle}>Technology</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn my-2 my-sm-0" type="submit" style={searchButtonStyle}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
