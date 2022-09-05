import './Home.css'
import '../../Helper/CommonlyUsed.css'
import JavaBattleship from '../../Media/JavaBattleship'
import PCBuilder from '../../Media/PCBuilder'
import PublicTransportVehicleEstimator from '../../Media/PublicTransportVehicleEstimator'
import ComingSoon from "../../Images/coming-soon.png"
import MyPorfolio from '../../Images/MyPortfolio.jpg'
//import JWTDemo from '../../Media/JWTDemo'
import ButtonLink from '../../Components/ButtonLink/ButtonLink'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Row className="mb-0 pb-0">
                <Col sm={12} >
                    <h1 className="ProjectTitle row-c">Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="px-5 col-card">
                    <Card>
                        <JavaBattleship />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                Java Battleship(2018)
                            </Card.Title>
                            <Card.Text>
                                The popular Battleship game made in Java, using Java Swing for the GUI. Abilty to save/load game, GUI detects monitor size, fullscreen,
                                uses threads for user/AI turn and win/loss detection. An ambitious project over the course of a college summer semesters.
                            </Card.Text>
                            <Card.Text className="mt-auto project-links">
                                <Row>
                                    <Col sm={8} className="pt-3">
                                        <ButtonLink link="https://github.com/IsGai/Java-Battleship-Game" text="Github" />
                                    </Col>
                                    <Col sm={4} className="more-details">
                                        {/* <ButtonLink variant="link" text="More Details (Coming soon...)" linkSVG=""/> */}
                                        {/* <ButtonLink variant="link" link="#/Java-Battleship-Game" text="More Details" linkSVG="" /> */}
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5 col-card">
                    <Card>
                        <PCBuilder />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                PC Builder
                            </Card.Title>
                            <Card.Text>
                                A website that checks for computer parts compatibility. No front end framework, Spring as backend, MySQL as database.

                            </Card.Text>
                            <Card.Text className="mt-auto project-links">
                                <Row>
                                    <Col sm={8} className="github-button">
                                        <ButtonLink link="https://github.com/dTrksak/PCBuilder" text="Github" />
                                    </Col>
                                    <Col sm={4} className="more-details">
                                        {/* <ButtonLink variant="link" link="#/PC-Builder" text="More Details" linkSVG="" /> */}
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5 col-card">
                    <Card>
                        <Card.Img height="315" src={MyPorfolio} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                Online Portfolio
                            </Card.Title>
                            <Card.Text>
                                My online portfolio created with React.js, Bootstrap, hosted by Github Pages and using Google Domains.
                                I created this site to showcase my programming knowledge and ability to grasp new concepts.
                            </Card.Text>
                            <Card.Text className="mt-auto project-links">
                                <Row>
                                    <Col sm={8} className="github-button">
                                        <ButtonLink link="https://github.com/WilliamKXiong/portfolio" text="Github" />
                                    </Col>
                                    <Col sm={4} className="more-details">
                                        {/* <ButtonLink variant="link" link="#/My-Online-Portfolio" text="More Details" linkSVG="" /> */}
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="pb-5">
                <Col sm={4} className="px-5 col-card">
                    <Card>
                        <PublicTransportVehicleEstimator />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                Public Transport Vehicle Estimator(2018)
                            </Card.Title>
                            <Card.Text>
                                A Java program that allows you to estimate how many buses/trains/shuttles/etc. you would need for a given set of passengers.
                                The program accomplishes this by allowing users to find their ideal commute routes which are then saved and the admin account can access.
                                Dijkstra's algorithm is used to find best routes, admin results are found through simulation, and GUI work is done in Java Swing API.
                            </Card.Text>
                            <Card.Text className="mt-auto project-links">
                                <Row>
                                    <Col sm={8} className="github-button">
                                        <ButtonLink link="https://github.com/IsGai/Public-Transport-Vehicle-Estimator" text="Github" />
                                    </Col>
                                    <Col sm={4} className="more-details">
                                        {/* <ButtonLink variant="link" link="#/PC-Builder" text="More Details" linkSVG="" /> */}
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="px-5 col-card">
                    {/*<Card>
                        <Card.Img height="315" src={ComingSoon} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                JSON Web Token
                            </Card.Title>
                            <Card.Text>
                                Implmenting JWT with Spring and React.js. For PC Builder, I had made all the nessasary requirements in Spring to allow the ability for JSON Web Tokens.
                                Due to time restraints and me having to assist my teams members in their tasks, I was not able to fully implement JWT for PC Builder.
                                <br />
                                <br />
                                (Coming soon...)
                            </Card.Text>
                            <Card.Text className="mt-auto project-links">
                                <Row>
                                    <Col sm={8} className="github-button">
                                        <ButtonLink variant="white" text="N/A" />
                                    </Col>
                                    <Col sm={4} className="more-details">
                                        {// <ButtonLink variant="link" link="#/PC-Builder" text="More Details" linkSVG="" /> }
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>*/}
                </Col>
                <Col sm={4} className="px-5 col-card">
                </Col>
            </Row>
        </Container>
    )
}

export default Home;