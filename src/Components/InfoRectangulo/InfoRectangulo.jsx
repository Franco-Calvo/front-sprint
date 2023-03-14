import React from 'react'
import './infoRect.css'

export default function InfoRectangulo() {
    return (
        <>
            <div className="estadisticas">
                <div className="cont-estadisticas">
                    <div className="est-num" >
                        <p className="num">numero</p>
                        <p>Raiting</p>
                    </div>
                    <p>|</p>
                    <div className="est-num">
                        <p className="num">numero</p>
                        <p>chapter</p>
                    </div>
                    <p>|</p>
                    <div className="est-num">
                        <p className="num">numero</p>
                        <p>Lenguaje</p>
                    </div>
                </div>
            </div>
        </>
    )
}

