import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >
                            <img src={logo} />
                            Proshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Nav className="ms-auto">
                        <LinkContainer to="cart">
                            <Nav.Link >
                                <FaShoppingCart /> Cart
                            </Nav.Link>

                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                <FaShoppingCart /> Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;