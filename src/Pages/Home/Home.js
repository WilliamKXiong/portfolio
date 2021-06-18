import './Home.css'
import professionalPhoto from '../../Images/Professional-Photo.jpg'

const Home = () => {
    return (
        <div className="Home">
            <h1>Hello!</h1>
            <h2>My name is William Xiong, and here's a picture of me.</h2>
            <img src={professionalPhoto} alt="Professional Photo" />
        </div>
    )
}

export default Home;