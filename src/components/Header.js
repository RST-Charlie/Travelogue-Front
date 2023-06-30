import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Airplane from '../assets/airplanelogo.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';



const Header = ({ currentUser, logout }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        logout();
        navigate('/');
    };

    return (
        <>
            <Navbar className="navbar">
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={Airplane}
                        style={{
                            height: 40,
                            width: 40,
                        }}
                    />
                    RSTech
                </NavbarBrand>
                <div className="links">
                    <Nav className="nav m1-auto">
                        {currentUser && (
                            <>
                                <NavItem className="mr-auto">
                                    <NavLink onClick={handleClick}>Log Out</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/addtrip">Add Trip</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/mytrips">My Trips</NavLink>
                                </NavItem>
                            </>
                        )}
                        {!currentUser && (
                            <>
                                <NavItem>
                                    <NavLink href="/login">
                                        Sign In
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/signup">
                                        Sign Up
                                    </NavLink>
                                </NavItem>
                            </>
                        )}

                        <NavItem>
                            <NavLink href="/demotrips">Adventures</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
};

export default Header;

