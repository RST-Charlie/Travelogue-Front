import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Airplane from "../assets/airplanelogo.png"
import "../Styles/Header.css"


const Header = () => {
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
                    Travelogue
                </NavbarBrand>
            <div className="Links">
                <Nav className="nav justify-content-end">
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">Log In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/AboutUs">Contact</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
        </>

    );
}

export default Header;