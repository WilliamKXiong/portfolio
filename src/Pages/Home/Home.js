import './Home.css'
import '../../Helper/CommonlyUsed.css'
import JavaBattleship from '../../Media/JavaBattleship'
import PCBuilder from '../../Media/PCBuilder'
import ComingSoon from "../../Images/coming-soon.png"
import MyPorfolio from '../../Images/MyPortfolio.jpg'
//import JWTDemo from '../../Media/JWTDemo'
import ButtonLink from '../../Components/ButtonLink/ButtonLink'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="row-c">
            <Row className="projects mb-0 pb-0">
                <Col sm={12} >
                    <h1 className="ProjectTitle">Projects</h1>
                </Col>
            </Row>
            <Row className="projects pb-5">
                <Col sm={4} className="px-5">
                    <Card>
                        <JavaBattleship />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                Java Battleship
                            </Card.Title>
                            <Card.Text>
                                <span>The popular Battleship game made in Java, using Java Swing for the GUI. </span>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <Row>
                                    <Col sm={8}>
                                        <ButtonLink link="https://github.com/IsGai/Java-Battleship-Game" text="Github" />
                                    </Col>
                                    <Col sm={4}>
                                        <ButtonLink variant="link" link="#/Java-Battleship-Game" text="More Details" linkSVG="" />
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5">
                    <Card>
                        <PCBuilder />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                PC Builder
                            </Card.Title>
                            <Card.Text>
                                <span>A website that checks for computer parts compatibility.</span>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <Row>
                                    <Col sm={8}>
                                        <ButtonLink link="https://github.com/dTrksak/PCBuilder" text="Github" />
                                    </Col>
                                    <Col sm={4}>
                                        <ButtonLink variant="link" link="#/PC-Builder" text="More Details" linkSVG="" />
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5">
                    <Card>
                        <Card.Img height="315" src={MyPorfolio}/>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                Online Portfolio
                            </Card.Title>
                            <Card.Text>
                                <span>
                                    My online portfolio created with React.js, Bootstrap, hosted by Github Pages and using Google Domains.
                                </span>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <Row>
                                    <Col sm={8}>
                                        <ButtonLink link="https://github.com/WilliamKXiong/portfolio" text="Github" />
                                    </Col>
                                    <Col sm={4}>
                                        <ButtonLink variant="link" link="#/My-Online-Portfolio" text="More Details" linkSVG="" />
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="projects pb-5">
                <Col sm={4} className="px-5">
                    <Card>
                        <Card.Img height="315" src={ComingSoon} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                JSON Web Token
                            </Card.Title>
                            <Card.Text>
                                <span>
                                    Implmenting JWT with Spring and React.js
                                    <br />
                                    (Coming soon...)
                                </span>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <Row>
                                    <Col sm={8}>
                                         <ButtonLink link="/" text="N/A" />
                                    </Col>
                                    <Col sm={4}>
                                        <ButtonLink variant="link" link="#/PC-Builder" text="More Details" linkSVG="" />
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5">
                </Col>
                <Col sm={4} className="px-5">
                </Col>
            </Row>
        </Container>
    )
}

export default Home;