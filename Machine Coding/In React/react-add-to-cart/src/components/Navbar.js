import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <Link to={"/"}>
                    <span>All Products</span>
                </Link>
                <Link to={"/cart"}>
                    <MDBBtn color='dark'>Cart(0)</MDBBtn>
                </Link>
            </MDBContainer>
        </MDBNavbar>
    );
}
