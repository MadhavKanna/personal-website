import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Madhav Kanna Thenappan</Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/education">Education</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;