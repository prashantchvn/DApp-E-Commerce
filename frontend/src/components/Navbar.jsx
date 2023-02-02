import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg"
import { BiShoppingBag } from "react-icons/bi"
import { Link } from 'react-router-dom'


function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg" className='bg-white py-3 shadow-sm'>
            <Container >
                <Navbar.Brand className='fw-bold fs-4' href="#">ECOMM</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="navbar">
                            <Nav.Link className="nav-links  nav-link-ltr"> <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/home"> Home </Link></Nav.Link>
                            <Nav.Link className="nav-links  nav-link-ltr"><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/Products"> Products</Link></Nav.Link>
                            <Nav.Link className="nav-links  nav-link-ltr"> <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/contact">Contact</Link></Nav.Link>
                            <Nav.Link className="nav-links  nav-link-ltr"> <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/seller">  Become-A-Seller</Link></Nav.Link>
                            <Nav.Link className="nav-links  nav-link-ltr"> <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/about"> About Us</Link></Nav.Link>
                        </div></Nav>

                    <div>
                        <div className="profile">
                            <Link className="li" to="/login"> <CgProfile className="ml-1.5" color="black" size={30} />Profile</Link>
                            <Link className="li" to="/cart"> <BiShoppingBag color="black" size={30} />Cart</Link>
                        </div>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    );
}

export default NavScrollExample;