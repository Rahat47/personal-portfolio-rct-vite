import { Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { navLinks } from "../../assets/data/navbarData";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <header
                id="header"
                className="fixed-top d-flex justify-content-center align-items-center"
            >
                <Nav className="navbar">
                    <ul>
                        {navLinks.map((link, i) => (
                            <Nav.Item key={i}>
                                <Link
                                    className="nav-link "
                                    activeClass="active"
                                    to={`${link.link}`}
                                    spy
                                >
                                    {link.name}
                                </Link>
                            </Nav.Item>
                        ))}
                    </ul>
                </Nav>

                <i
                    onClick={() => setShow(prev => !prev)}
                    className="mobile-nav-toggle"
                >
                    <BiMenu />
                </i>
            </header>

            <Offcanvas
                className="h-100"
                show={show}
                placement="top"
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Portfolio</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav>
                        <ul>
                            {navLinks.map((link, i) => (
                                <Nav.Item key={i}>
                                    <Link
                                        onClick={handleClose}
                                        className="nav-link"
                                        activeClass="active"
                                        to={`${link.link}`}
                                        spy
                                    >
                                        {link.name}
                                    </Link>
                                </Nav.Item>
                            ))}
                        </ul>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navbar;
