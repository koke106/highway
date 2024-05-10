import CV from './cv.jpeg';
import './about.css'

const About = () => {
    return (
        <div className="contentImage" >
            <img src={CV} width={620} height={877} alt="CV Jorge Peinado" />
        </div>
    )
}

export default About