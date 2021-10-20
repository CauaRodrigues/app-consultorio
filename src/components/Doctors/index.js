import React from 'react';
import './style.css';

export default function Doctors() {
    return (
        <div>
            <ul className="lista-medicos">
                <li>
                    <img src="assets/medico01.png" alt="Dr. Hélio" title="Dr. Hélio" />
                    <p className="name-doctor">Dr. Hélio</p>
                    <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                </li>

                <li>
                    <img src="assets/medico02.png" alt="Dr. Carlos" title="Dr. Carlos" />
                    <p className="name-doctor">Dr. Carlos</p>
                    <p>Terças e quintas das 13:00 às 18:00</p>
                </li>
                
                <li>
                    <img src="assets/medico03.png" alt="Dra. Suzana" title="Dra. Suzana" />
                    <p className="name-doctor">Dra. Suzana</p>
                    <p>Terças e quintas e sábado das 08:00 às 12:00</p>
                </li>
            </ul>
        </div>
    );
}