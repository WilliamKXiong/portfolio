import 'Components/ProjectCard/ProjectCard.css';
import 'Helper/CommonlyUsed.css';
import ButtonLink from 'Components/ButtonLink/ButtonLink';
import { Card, Row, Col } from 'react-bootstrap';
import JavaBattleship from 'Media/JavaBattleship';
import PCBuilder from 'Media/PCBuilder';
import PublicTransportVehicleEstimator from 'Media/PublicTransportVehicleEstimator';
import ComingSoon from 'Images/coming-soon.png';
import MyPorfolio from 'Images/MyPortfolio.jpg';

interface ProjectCardProps {
  mediaFile: string;
  cardTitle: string;
  cardText: string;
  buttonLink: string;
  buttonText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  mediaFile,
  cardTitle,
  cardText,
  buttonLink,
  buttonText,
}) => {
  return (
    <Col sm={4} className="px-5 col-card">
      <Card>
        {(() => {
          switch (mediaFile) {
            case 'JavaBattleship':
              return <JavaBattleship />;
            case 'PCBuilder':
              return <PCBuilder />;
            case 'PublicTransportVehicleEstimator':
              return <PublicTransportVehicleEstimator />;
            case 'MyPorfolio':
              return <Card.Img height="315" src={MyPorfolio} alt="My Portfolio" />;
            case 'ComingSoon':
              return <Card.Img height="315" src={ComingSoon} alt="Coming Soon" />;
            default:
              return null;
          }
        })()}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Card.Text className="mt-auto project-links">
            <Row>
              <Col sm={8} className="pt-3">
                <ButtonLink link={buttonLink} text={buttonText === undefined ? "Github" : buttonText} />
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
  );
};

export default ProjectCard;
