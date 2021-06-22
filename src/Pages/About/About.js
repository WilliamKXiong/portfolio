//import './About.css'
import '../../Helper/CommonlyUsed.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Container, Row, Col } from 'react-bootstrap';
import ProfessionalPhoto from '../../Images/Professional-Photo.jpg'

const About = () => {
    return (
        <Container>
            <Row className="pl-5">
                <h1>About Me</h1>
            </Row>
            <Row>
                <Col sm={8} className="pl-2">
                    <span>This is sample text</span>
                </Col>
                <Col sm={4} className="d-flex justify-content-center">
                    <Image src={ProfessionalPhoto} roundedCircle fluid/>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default About;