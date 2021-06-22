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
                        My favorite football team is the Minnesota Vikings, I like to hang out with my family, and I like to do house projects/chores during my spare time. 

                    </span>
                </Col>
                <Col sm={4} className="d-flex col-text">
                    <Image src={ProfessionalPhoto} roundedCircle />
                </Col>
            </Row>
            <Row className="px-5 row-body">
                <h1>About this site</h1>
            </Row>
            <Row className="px-5 row-body">
                <Col sm={12} className="col-text">
                    <span>
                        I created this site to showcase my projects and future projects that I would like to do. I also wanted to learn about React.js, 
                        so I built this site utilizing React.js, Node.js, Github Pages, and Google Domain. I used basic CSS and Bootstrap for designing(not the most aesthetic).
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default About;