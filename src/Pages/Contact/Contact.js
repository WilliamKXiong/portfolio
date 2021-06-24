import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Card } from 'react-bootstrap';
import ButtonLink from '../../Components/ButtonLink/ButtonLink';

const Contact = () => {
    return (
        <Container fluid className="text-center">
                <Row>
                    <Card>
                        <Card.Title>
                            Contact
                        </Card.Title>
                        <Card.Body className="">
                            <Card.Text>
                                <ButtonLink link="#footer" text="none" linkSVG=""/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
        </Container>
    )
}

export default Contact;