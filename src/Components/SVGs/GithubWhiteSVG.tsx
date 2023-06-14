import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from 'react-bootstrap';
import GithubWhite from '../../Images/github-11-32.png';

//Not really a SVG, but used as one
const GithubWhiteSVG: React.FC = () => {
    return (
        <Image style={{height:'25px',width:'25px'}} src={GithubWhite} />
    )
}

export default GithubWhiteSVG