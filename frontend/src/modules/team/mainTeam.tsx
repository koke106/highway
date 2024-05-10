import { useState } from 'react';
import './styles/mainTeam.css'

const MainTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [ceo, setCeo] = useState('');
    const [careerDirector, setCareerDirector] = useState('');
    const [crewChief, setCrewChief] = useState('');
    const [mechanic1, setMechanic1] = useState('');
    const [mechanic2, setMechanic2] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log('Formulario enviado:');
        console.log('Nombre del equipo:', teamName);
        console.log('CEO:', ceo);
        console.log('Director de carrera:', careerDirector);
        console.log('Jefe de mecánicos:', crewChief);
        console.log('Mecánico 1:', mechanic1);
        console.log('Mecánico 2:', mechanic2);
    };
    
    return (
        <div className="containerMainTeam">
            <form onSubmit={handleSubmit}>
            <div className='group-form'>
                <div className='element-form'>
                    <label className='labelText' htmlFor="teamName">Nombre del equipo:</label>
                    <input type="text" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} className='inputText' />
                </div>

                <div className='element-form'>
                    <label className='labelText' htmlFor="ceo">CEO:</label>
                    <input type="text" id="ceo" value={ceo} onChange={(e) => setCeo(e.target.value)} className='inputText' />
                </div>
            </div>

            <div className='group-form'>
                <div className='element-form'>
                    <label className='labelText' htmlFor="careerDirector">Director de carrera:</label>
                    <input type="text" id="careerDirector" value={careerDirector} onChange={(e) => setCareerDirector(e.target.value)} className='inputText' />
                </div>

                <div className='element-form'>
                    <label className='labelText' htmlFor="crewChief">Jefe de mecánicos:</label>
                    <input type="text" id="crewChief" value={crewChief} onChange={(e) => setCrewChief(e.target.value)} className='inputText' />
                </div>
            </div>

            <div className='group-form'>
                <div className='element-form'>
                    <label className='labelText' htmlFor="mechanic1">Mecánico 1:</label>
                    <input type="text" id="mechanic1" value={mechanic1} onChange={(e) => setMechanic1(e.target.value)} className='inputText' />
                </div>

                <div className='element-form'>
                    <label className='labelText' htmlFor="mechanic2">Mecánico 2:</label>
                    <input type="text" id="mechanic2" value={mechanic2} onChange={(e) => setMechanic2(e.target.value)} className='inputText' />
                </div>
            </div>

            <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default MainTeam