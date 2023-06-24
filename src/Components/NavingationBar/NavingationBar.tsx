import "Components/NavingationBar/NavingationBar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap';

const NavingationBar: React.FC = () => {
    function scrollBottom() {
        window.scrollTo(0, document.body.clientHeight);
    }

    return (
        <Navbar className="NavingationBar" variant="dark" expand="lg">
            <Navbar.Brand href="/" className="NavBrand" style={{ color: "white" }}>My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="NavLink" style={{ color: "white" }}>Home</Nav.Link>
                    <Nav.Link href="#/about" className="NavLink" style={{ color: "white" }}>About</Nav.Link>
                    <Nav.Link onClick={scrollBottom} className="NavLink" style={{ color: "white" }}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavingationBar;