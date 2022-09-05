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
                        Currently, I am a Software Engineer at King Solutions, Inc.
                        My favorite football team is the Minnesota Vikings, I like to hang out with my family, and I like to do house projects/chores during my spare time.
                    </span>
                </Col>
                <Col sm={2}>
                    <Image src={ProfessionalPhoto} />
                    <Image className="military-photo" src={"https://media.defense.gov/2015/May/13/2001140762/1088/820/0/031748-A-GRW84-537.jpg"}
                        title="U.S. Marine Corps Lance Cpl. William Xiong awaits the arrival of earthquake victims at a medical triage area at Tribhuvan International Airport, Kathmandu, Nepal, May 13, 2015. | defense.gov" />
                </Col>
            </Row>
            <Row className="pt-2 px-5 row-body">
                <h1>About this site</h1>
            </Row>
            <Row className="px-5 row-body">
                <Col sm={12} className="col-text">
                    <span className="about-description">
                        This site is created with <span>React</span>, <span>Node.js</span>, <span>Github Pages</span>, and <span>Google Domain</span>. I used CSS and Bootstrap for the site's style and appearance.
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default About;