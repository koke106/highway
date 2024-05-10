import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";


import './car.css'


const InfoCar = () => {
    const [visibleRuedas, setVisibleRuedas] = useState(false),
    [visibleMotriz, setVisibleMotriz] = useState(false),
    [visibleGeneral, setVisibleGeneral] = useState(false),
    {register,handleSubmit} = useForm(),
    onSubmit = (d:any) => {
        console.log('submit....',d);
    };

    return (
        <div className="main">
            <div className='containerOptions' onClick={() => {
                setVisibleRuedas(!visibleRuedas);
            }}>
                <p className='textContainer' >Trenes de ruedas</p> {visibleRuedas ? <FaArrowUp/> : <FaArrowDown />} 
            </div>
            {visibleRuedas && (
                <form onSubmit={handleSubmit(onSubmit)} className='formContent'>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="llantas">Estado llantas y neumaticos:</label>
                            <input type="text" id="llantas" {...register('llantas')} className='inputText' />
                            <label className='labelText' htmlFor="llantasRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="llantasRevisado" {...register('llantasRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="frenosDelanteros">Frenos delanteros:</label>
                            <input type="text" id="frenosDelanteros" {...register('frenosDelanteros')} className='inputText' />
                            <label className='labelText' htmlFor="frenosDelanterosRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="frenosDelanterosRevisado" {...register('frenosDelanterosRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="frenosTraseros">Frenos traseros:</label>
                            <input type="text" id="frenosTraseros" {...register('frenosTraseros')} className='inputText'/>
                            <label className='labelText' htmlFor="frenosTraserosRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="frenosTraserosRevisado" {...register('frenosTraserosRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="purgaFrenos">Purga de frenos:</label>
                            <input type="text" id="purgaFrenos" {...register('purgaFrenos')} className='inputText'/>
                            <label className='labelText' htmlFor="purgaFrenosRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="purgaFrenosRevisado" {...register('purgaFrenosRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="trapecios">Apriete trapecios 8 (del & tras):</label>
                            <input type="text" id="trapecios" {...register('trapecios')} className='inputText'/>
                            <label className='labelText' htmlFor="trapeciosRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="trapeciosRevisado" {...register('trapeciosRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="holgurasRuedas">Juegos y holguras ruedas:</label>
                            <input type="text" id="holgurasRuedas" {...register('holgurasRuedas')} className='inputText'/>
                            <label className='labelText' htmlFor="holgurasRuedasRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="holgurasRuedasRevisado" {...register('holgurasRuedasRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="transmision">Transmision y guardapolvos:</label>
                            <input type="text" id="transmision" {...register('transmision')} className='inputText'/>
                            <label className='labelText' htmlFor="transmisionRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="transmisionRevisado" {...register('transmisionRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="visualAmortiguadores">Estado visual amortiguadores:</label>
                            <input type="text" id="visualAmortiguadores" {...register('visualAmortiguadores')} className='inputText'/>
                            <label className='labelText' htmlFor="visualAmortiguadoresRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="visualAmortiguadoresRevisado" {...register('visualAmortiguadoresRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="aprieteRuedas">Apriete ruedas con dinamometrica:</label>
                            <input type="text" id="aprieteRuedas" {...register('aprieteRuedas')} className='inputText'/>
                            <label className='labelText' htmlFor="aprieteRuedasRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="aprieteRuedasRevisado" {...register('aprieteRuedasRevisado')} />
                        </div>
                    </div>
                </form>
            )}

            <div className='containerOptions' onClick={() => {
                setVisibleMotriz(!visibleMotriz);
            }}>
                <p className='textContainer' >Grupo Motriz</p> {visibleMotriz ? <FaArrowUp/> : <FaArrowDown />} 
            </div>
            {visibleMotriz && (
                <form onSubmit={handleSubmit(onSubmit)} className='formContent'>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="filtroAire">Revision filtro del aire:</label>
                            <input type="text" id="filtroAire" {...register('filtroAire')} className='inputText' />
                            <label className='labelText' htmlFor="filtroAireRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="filtroAireRevisado" {...register('filtroAireRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="fugas">Revision de fugas:</label>
                            <input type="text" id="fugas" {...register('fugas')} className='inputText' />
                            <label className='labelText' htmlFor="fugasRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="fugasRevisado" {...register('fugasRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="aguaParabrisas">Agua lavaparabrisas:</label>
                            <input type="text" id="aguaParabrisas" {...register('aguaParabrisas')} className='inputText' />
                            <label className='labelText' htmlFor="aguaParabrisasRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="aguaParabrisasRevisado" {...register('aguaParabrisasRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="aceiteMotor">Nivel aceite motor:</label>
                            <input type="text" id="aceiteMotor" {...register('aceiteMotor')} className='inputText' />
                            <label className='labelText' htmlFor="aceiteMotorRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="aceiteMotorRevisado" {...register('aceiteMotorRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="refrigerante">Nivel refrigerante:</label>
                            <input type="text" id="refrigerante" {...register('refrigerante')} className='inputText' />
                            <label className='labelText' htmlFor="refrigeranteRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="refrigeranteRevisado" {...register('refrigeranteRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="liquidoFrenos">Nivel liquido de frenos:</label>
                            <input type="text" id="liquidoFrenos" {...register('liquidoFrenos')} className='inputText' />
                            <label className='labelText' htmlFor="liquidoFrenosRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="liquidoFrenosRevisado" {...register('liquidoFrenosRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="estadoCorreas">Estado coreas:</label>
                            <input type="text" id="estadoCorreas" {...register('estadoCorreas')} className='inputText' />
                            <label className='labelText' htmlFor="estadoCorreasRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="estadoCorreasRevisado" {...register('estadoCorreasRevisado')} />
                        </div>
                    </div>
                </form>
            )}


            <div className='containerOptions' onClick={() => {
                setVisibleGeneral(!visibleGeneral);
            }}>
                <p className='textContainer' >General</p> {visibleGeneral ? <FaArrowUp/> : <FaArrowDown />} 
            </div>
            {visibleGeneral && (
                <form onSubmit={handleSubmit(onSubmit)} className='formContent'>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="fijacionAccesorios">Fijación de accesorios (gato,makita...):</label>
                            <input type="text" id="fijacionAccesorios" {...register('fijacionAccesorios')} className='inputText' />
                            <label className='labelText' htmlFor="fijacionAccesoriosRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="fijacionAccesoriosRevisado" {...register('fijacionAccesoriosRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="cableCambio">Cable cambio:</label>
                            <input type="text" id="cableCambio" {...register('cableCambio')} className='inputText' />
                            <label className='labelText' htmlFor="cableCambioRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="cableCambioRevisado" {...register('cableCambioRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="cableCambio">Cable cambio:</label>
                            <input type="text" id="cableCambio" {...register('cableCambio')} className='inputText' />
                            <label className='labelText' htmlFor="cableCambioRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="cableCambioRevisado" {...register('cableCambioRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="limpiezaCristales">Limpieza cristales:</label>
                            <input type="text" id="limpiezaCristales" {...register('limpiezaCristales')} className='inputText' />
                            <label className='labelText' htmlFor="limpiezaCristalesRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="limpiezaCristalesRevisado" {...register('limpiezaCristalesRevisado')} />
                        </div>
                    </div>
                    <div className='group-form'>
                        <div className='element-form'>
                            <label className='labelText' htmlFor="limpiezaGeneral">Limpieza general:</label>
                            <input type="text" id="limpiezaGeneral" {...register('limpiezaGeneral')} className='inputText' />
                            <label className='labelText' htmlFor="limpiezaGeneralRevisado">Revisado:</label>
                            <input className='revisado' type="checkBox" id="limpiezaGeneralRevisado" {...register('limpiezaGeneralRevisado')} />
                        </div>
                    </div>
                </form>
            )}

            <div>
                <p>Operaciones realizadas</p>
                <textarea id='observacionesRealizadas' className='textareaText' cols={4} placeholder='Operaciones realizadas' />


                <p>Observaciones proxima asistencia</p>
                <textarea id='observacionesProximaAsistencia' className='textareaText' cols={4} placeholder='Observaciones proxima asistencia' />
            </div>
        </div>
    )
}

export default InfoCar