import React, { useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; 
import Airplane from "../assets/airplanelogo.png"
import "../Styles/Header.css"


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    return (
        <>
            <Navbar className="Navbar">
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={Airplane}
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    RSTech
                </NavbarBrand>
                <div className="Links">
                    <Nav className="nav justify-content-end">
                        {isLoggedIn ? (
                        <NavItem>
                            <NavLink onClick={() => handleLogout()}>Log Out</NavLink>
                        </NavItem>
                        ) : (
                        <NavItem>
                            <NavLink href="/login" onClick={() => handleLogout()}>
                                Log In
                            </NavLink>
                        </NavItem>
                        )}
                        <NavItem>
                            <NavLink href="/AboutUs">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </>

    );
}

export default Header;