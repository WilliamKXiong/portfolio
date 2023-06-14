import './About.css';
import '../../Helper/CommonlyUsed.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import ProfessionalPhoto from '../../Images/Professional-Photo.jpg';

export default function About(): JSX.Element {
  return (
    <Container>
      <Row className="pt-2 px-5">
        <h1>About Me</h1>
      </Row>
      <Row className="px-5">
        <Col sm={8} className="col-text">
            <span className='about-me'>
                Hello, my name is William Xiong. 
                <ul>
                    <li>
                        I am a Software Engineer at <a href="https://www.orangetreescreening.com/" style={{ color: 'orange' }}>Orange Tree Employment Screening</a>.
                    </li>
                    <li>
                        2021 Bachelors of Science graduate at <a href="https://www.metrostate.edu/">Metropolitan State University</a>.
                    </li>
                    <li>
                        Before college I served 4 years in the United States Marine Corps as a Transmissions System Operator(radio operator for short).
                    </li>
                    <li>
                        My favorite football team is the Minnesota Vikings, I like to hang out with my family, and I like to do house projects/chores during my spare time.
                    </li>
                </ul>
            </span>
          {/* <span>
            Hello, my name is William Xiong. I am a Computer Science graduate at{" "}
            <a href="https://www.metrostate.edu/">Metropolitan State University.</a> Before college I served 4 years in the United States Marine Corps as a
            Transmissions System Operator(radio operator for short). Currently, I am a Software Engineer at <span style={{ color: 'orange' }}>Orange Tree Employment Screening</span>. My favorite football team
            is the Minnesota Vikings, I like to hang out with my family, and I like to do house projects/chores during my spare time.
          </span> */}
        </Col>
        <Col sm={2}>
          <Image src={ProfessionalPhoto} />
          <Image
            className="military-photo"
            src="https://media.defense.gov/2015/May/13/2001140762/1088/820/0/031748-A-GRW84-537.jpg"
            title="U.S. Marine Corps Lance Cpl. William Xiong awaits the arrival of earthquake victims at a medical triage area at Tribhuvan International Airport, Kathmandu, Nepal, May 13, 2015. | defense.gov"
          />
        </Col>
      </Row>
      <br/>
      <Row className="pt-2 px-5 row-body">
        <h1>About this site</h1>
      </Row>
      <Row className="px-5 row-body">
        <Col sm={12} className="col-text">
          <span className="about-description">
            This site is created with <span>React</span>, <span>Node.js</span>, <span>Github Pages</span>, and <span>Google Domain</span>. I used CSS and
            Bootstrap for the site's style and appearance.
          </span>
        </Col>
      </Row>
    </Container>
  );
};
