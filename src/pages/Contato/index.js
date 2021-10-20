import React from "react";
import StructurePage from '../../components/StructurePage';
import ContactMap from "../../components/Map";
import './style.css';

const Contact = () => {
    return(
        <StructurePage>
            <div className="contato-container">
                
                    <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>
                    <p>Agende uma consulta pelo telefone: (11) 5647 - 0007</p>
                    <ul className="lista-medicos">
                        <li>
                            <img src="assets/medico01.png" className="img-aparelho" alt="Dr. Hélio" title="Dr. Hélio" />
                            <p>Dr. Hélio</p>
                            <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                        </li>
                        <li>
                            <img src="assets/medico02.png" className="img-aparelho" alt="Dr. Carlos" title="Dr. Carlos" />
                            <p>Dr. Carlos</p>
                            <p>Terças e quintas das 13:00 às 18:00</p>
                        </li>
                        <li>
                            <img src="assets/medico03.png" className="img-aparelho" alt="Dra. Suzana" title="Dra. Suzana" />
                            <p>Dra. Suzana</p>
                            <p>Terças e quintas e sábado das 08:00 às 12:00</p>
                        </li>
                    </ul>
          
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>
                    <p>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro, São Paulo - SP</p>
                    <ContactMap />
                </div>
            </div>

        </StructurePage>
    );
}

export default Contact;