import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                    <img src={logo}/>
                    Proshop</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Nav className="ms-auto">
                    <Nav.Link href='/cart'>
                    <FaShoppingCart/> Cart
                    </Nav.Link>
                    <Nav.Link href='/login'>
                    <FaShoppingCart/> Sign In
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;