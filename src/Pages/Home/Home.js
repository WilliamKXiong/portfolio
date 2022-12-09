import './Home.css'
import '../../Helper/CommonlyUsed.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../../Components/ProjectCard/ProjectCard'

export default function Home() {
    return (
        <Container fluid>
            <Row className="mb-0 pb-0">
                <Col sm={12} >
                    <h1 className="ProjectTitle row-c">Projects</h1>
                </Col>
            </Row>
            <Row>
                <ProjectCard
                    mediaFile={"JavaBattleship"}
                    cardTitle={"Java Battleship(2018)"}
                    cardText={"The popular Battleship game made in Java, using Java Swing for the GUI. Abilty to save/load game, GUI detects monitor size, fullscreen,"
                    + "uses threads for user/AI turn and win/loss detection. An ambitious project over the course of a college summer semesters."}
                    buttonLink={"https://github.com/IsGai/Java-Battleship-Game"}
                />
                <ProjectCard
                    mediaFile={"PCBuilder"}
                    cardTitle={"PC Builder"}
                    cardText={"A website that checks for computer parts compatibility. No front end framework, Spring as backend, MySQL as database."}
                    buttonLink={"https://github.com/dTrksak/PCBuilder"}
                />
                <ProjectCard
                    mediaFile={"MyPorfolio"}
                    cardTitle={"Online Portfolio"}
                    cardText={"My online portfolio created with React.js, Bootstrap, hosted by Github Pages and using Google Domains."
                    + "I created this site to showcase my programming knowledge and ability to grasp new concepts."}
                    buttonLink={"https://github.com/WilliamKXiong/portfolio"}
                />
            </Row>
            <Row className="pb-5">
                <ProjectCard
                    mediaFile={"PublicTransportVehicleEstimator"}
                    cardTitle={"Public Transport Vehicle Estimator(2018)"}
                    cardText={" A Java program that allows you to estimate how many buses/trains/shuttles/etc. you would need for a given set of passengers."
                    + "The program accomplishes this by allowing users to find their ideal commute routes which are then saved and the admin account can access."
                    + "Dijkstra's algorithm is used to find best routes, admin results are found through simulation, and GUI work is done in Java Swing API."}
                    buttonLink={"https://github.com/IsGai/Public-Transport-Vehicle-Estimator"}
                />
                {/*
                <ProjectCard
                    mediaFile={"ComingSoon"}
                    cardTitle={"Coming Soon"}
                    cardText={""}
                    buttonLink={""}
                    buttonText={"Github"}
                />
                <ProjectCard
                    mediaFile={"ComingSoon"}
                    cardTitle={"Coming Soon"}
                    cardText={""}
                    buttonLink={""}
                    buttonText={"Github"}
                />*/}
            </Row>
        </Container>
    );
}