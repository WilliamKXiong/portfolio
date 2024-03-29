import "Components/Footer/Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container } from 'react-bootstrap';
import LinkedInSVG from "Components/SVGs/LinkedInSVG";
import GithubWhiteSVG from "Components/SVGs/GithubWhiteSVG";
import EmailWhiteSVG from "Components/SVGs/EmailWhiteSVG";

const Footer: React.FC = () => {
    return (
        <Container fluid className="footer" id="footer">
            <Row>
                <Col sm={6} className="footer-title">
                    <Row>
                        <h1>My Portfolio</h1>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Col sm={12} className="col-contact">
                        <Row><a href="https://github.com/WilliamKXiong"><GithubWhiteSVG /> My Github</a></Row>
                        <Row><a href="https://www.linkedin.com/in/william-xiong-b5312a140/"><LinkedInSVG /> My LinkedIn</a></Row>
                        <Row><a href="mailto:williamkarxiong@gmail.com"><EmailWhiteSVG /> williamkarxiong@gmail.com</a></Row>
                    </Col>
                </Col>
            </Row>
            <Row className="created-by">
                <span>Created by: William Xiong</span>
            </Row>
        </Container>
    )
}

export default Footer;