import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navigation = () => {
    let cartItems = useSelector((state) => state.addedItems);
    let totalItems =  cartItems.length
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>The Right Shop</Navbar.Brand>
                    <Nav variant="pills">
                        <Nav className="me-auto justify-content-end">
                            <Nav.Link>
                                <Link to="/">Products</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/cart">Cart{totalItems ?  ` : ${totalItems} Items` : null}</Link>
                            </Nav.Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
