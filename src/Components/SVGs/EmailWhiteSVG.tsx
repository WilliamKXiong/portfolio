import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from 'react-bootstrap';
import EmailWhite from 'Images/emailWhiteSVG.png';

//Not really a SVG, but used as one
const EmailWhiteSVG: React.FC = () => {
    return (
        <Image style={{height:'25px',width:'25px'}} src={EmailWhite} />
    )
}

export default EmailWhiteSVG