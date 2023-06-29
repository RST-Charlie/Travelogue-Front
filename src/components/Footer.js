import { useState } from 'react';
import { Navbar, Nav, Button, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'; 
import "../Styles/Footer.css"
import 'animate.css';

const Footer = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
        <>
            <Navbar className="
                d-flex flex-row justify-content-start
                p-2 mt-5
                sticky-bottom
                animate__animated 
                animate__slideInUp 
                footer"
                dark
            >
                <NavbarToggler onClick={toggleNavbar} className='toggler-icon order-2' dark />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className='toggler-items p-3'>
                        <NavItem>
                            <NavLink 
                                href="mailto: rstcharlie2023@yahoo.com"
                            >
                                ✉  Contact us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                href="/meetRST"
                            >
                                ☺  Meet RSTech
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>

    );
}

export default Footer;