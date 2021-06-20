import professionalPhoto from '../../Images/Professional-Photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <div className="Home">
                <h1>Hello!</h1>
                <h2>My name is William Xiong, and here's a picture of me.</h2>
                <img src={professionalPhoto} alt="Professional Photo" />
                <Alert variant="primary">This is a button</Alert>
                <Button>Test</Button>
            </div>
        </Container>
    )
}

export default Home;