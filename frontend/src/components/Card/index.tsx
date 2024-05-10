import React from "react";
import './card.css'

export interface ContentCard {
    id: number;
    title: string;
    zone: string;
    autor: string;
}

const Card = (info: ContentCard) => {
    return (
        <div className="container-card" >
            <div className="left-area">
                <p className="title-zone">{info.zone}</p>
                <p className="title-card">{info.title}</p>
                <p className="title-autor">{info.autor}</p>
            </div>
            <div className="right-area">
                <img width="1980" height="1320" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/05/04/17148424513700.jpg" className="content-image" alt="Cachón, en acción."></img>
            </div>
        </div>
)
}

export default Card