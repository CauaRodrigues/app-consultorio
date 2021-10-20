import React from "react";
import StructurePage from '../../components/StructurePage';
import ContactMap from "../../components/Map";
import Doctors from "../../components/Doctors";
import './style.css';

const Contact = () => {
    return(
        <StructurePage>
            <div className="contato-container">
                <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>
                <p>Agende uma consulta pelo telefone: (11) 5647 - 0007</p>
                
                <Doctors />
          
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