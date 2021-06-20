import './Home.css'
import '../../Helper/CommonlyUsed.css'
import JavaBattleship from '../../Media/JavaBattleship'
import PCBuilder from '../../Media/PCBuilder'
import ComingSoon from "../../Images/coming-soon.png"
//import JWTDemo from '../../Media/JWTDemo'
import ButtonLink from '../../Components/ButtonLink/ButtonLink'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="row-c">
            <Row className="row-c projects mb-0 pb-0">
                <Col sm={12} >
                    <h1 className="ProjectTitle">Projects</h1>
                </Col>
            </Row>
            <Row className="projects pb-5">
                <Col sm={4} className="px-5">
                    <Card style={{ height: "100%" }}>
                        <JavaBattleship />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                Java Battleship
                            </Card.Title>
                            <Card.Text>
                                <text>The popular Battleship game made in Java, using Java Swing for the GUI. </text>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <ButtonLink link="https://github.com/IsGai/Java-Battleship-Game" text="Go to Github Repo" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5">
                    <Card style={{ height: "100%" }}>
                        <PCBuilder />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                PC Builder
                            </Card.Title>
                            <Card.Text>
                                <text>A website that checks for computer parts compatibility.</text>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                <ButtonLink link="https://github.com/dTrksak/PCBuilder" text="Go to Github Repo" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5">
                    <Card style={{ height: "100%" }}>
                        {/*<PCBuilder />*/}
                        <Card.Img height="315" src={ComingSoon} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                JSON Web Token
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <text>Implmenting JWT with Spring and React.js</text>
                                </div>
                                <div>
                                    <text>(Coming soon...)</text>
                                </div>
                            </Card.Text>
                            <Card.Text className="mt-auto">
                                    <ButtonLink link="/" text="Not Yet Implemented" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={2} />
                <Col sm={8}>
                </Col>
                <Col sm={2} />
            </Row>
        </Container>
    )
}

export default Home;