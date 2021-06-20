//import './About.css'
import '../../Helper/CommonlyUsed.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavingationBar from '../../Components/NavingationBar/NavingationBar'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid className="text-center">
            <Row className="row-c">
                <Col sm={12}>
                    About
                </Col>
            </Row>
            <Row className="row-c">
                <Col sm={12}>
                    This is my online portfolio created with React.js, hosted with Github Pages, and using Google Domain
                </Col>
            </Row>
        </Container>
    )
}

export default About;