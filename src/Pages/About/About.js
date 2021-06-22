import './About.css'
import '../../Helper/CommonlyUsed.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Container, Row, Col } from 'react-bootstrap';
import ProfessionalPhoto from '../../Images/Professional-Photo.jpg'

const About = () => {
    return (
        <Container>
            <Row className="px-5">
                <h1>About Me</h1>
            </Row>
            <Row className="px-5 row-body">
                <Col sm={8} className="col-text">
                    <span>
                        Hello my name is William Xiong, and I am a Computer Science graduate at <a href="https://www.metrostate.edu/">Metropolitan State University.</a>
                        Before college I served 4 years in the United States Marine Corps as a Transmissions System Operator(radio operator for short).
                        fdfd

                    </span>
                </Col>
                <Col sm={4} className="d-flex col-text">
                    <Image src={ProfessionalPhoto} roundedCircle />
                </Col>
            </Row>
            <Row className="px-5 row-body">
                <Col sm={12} className="col-text">

                </Col>
            </Row>
        </Container>
    )
}

export default About;