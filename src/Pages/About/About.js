import './About.css'
import '../../Helper/CommonlyUsed.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Container, Row, Col } from 'react-bootstrap';
import ProfessionalPhoto from '../../Images/Professional-Photo.jpg'

const About = () => {
    return (
        <Container>
            <Row className="pt-2 px-5">
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
                    <a href="#/contact" title="Contact"><Image src={ProfessionalPhoto} roundedCircle /></a>
                </Col>
            </Row>
            <Row className="pt-2 px-5 row-body">
                <h1>About this site</h1>
            </Row>
            <Row className="px-5 row-body">
                <Col sm={12} className="col-text">
                    <span className="about-description">
                        I created this site to showcase my projects and future projects that I would like to do. I also wanted to learn about React.js, 
                        so I built this site utilizing <span>React</span>, <span>Node.js</span>, <span>Github Pages</span>, and <span>Google Domain</span>. I used CSS and Bootstrap for the sites style and appearance.
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default About;