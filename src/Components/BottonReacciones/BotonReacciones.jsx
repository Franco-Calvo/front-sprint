import React from 'react'
import Like from '../../imagenes/like.png'
import Dislike from '../../imagenes/dislike.png'
import Love from '../../imagenes/love.png'
import Amazed from '../../imagenes/amazed.png'
import './botonReacciones.css'
export default function BotonReacciones() {
    return (
        <>
            <div className="contenedor-reactions" >
                <div className="cont-button-reactions">
                    <div className="button-reaction">
                        <img src={Like} alt="like" />
                        <img src={Dislike} alt="dislike" />
                        <img src={Love} alt="love" />
                        <img src={Amazed} alt="amazed" />
                    </div>
                </div>
            </div>
        </>
    )
}
