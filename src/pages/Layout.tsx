import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
    return <>
        <div className="navbar">
            <Link to="">Dashboard</Link>
            <Link to="/add">Add Student</Link>
        </div>

        <br />
        <div className="container">
            <Outlet />
        </div>
    </>
}