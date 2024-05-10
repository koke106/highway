import { useNavigate } from 'react-router-dom';
import Subaru from '../../resources/svgs/subaru.svg'
import './car.css'

const Car = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/car/infoCar');
    }

    return (
        <div className="containerCars">
        <div className="carsContainer" onClick={handleClick} >
            <img src={Subaru} width={200} height={200} alt='' />
            <p className="carName" >Mini Cooper</p>
        </div>
        <div className="carsContainer" onClick={handleClick} >
            <img src={Subaru} width={200} height={200} alt='' />
            <p className="carName" >Subaru Impreza</p>
        </div>
        <div className="carsContainer" onClick={handleClick} >
            <img src={Subaru} width={200} height={200} alt='' />
            <p className="carName" >Toyota Hilux</p>
        </div>
        </div>
    )
}

export default Car