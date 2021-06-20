import "./NavingationBar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar  } from 'react-bootstrap';
const NavingationBar = () => {
    return (
        <Navbar className="NavingationBar" expand="lg">
            <Navbar.Brand href="/" className="NavBrand" style={{color:"white"}}>My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="NavLink" style={{color:"white"}}>Home</Nav.Link>
                    <Nav.Link href="#/about" className="NavLink" style={{color:"white"}}>About</Nav.Link>
                    <Nav.Link href="#/contact" className="NavLink" style={{color:"white"}}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavingationBar;