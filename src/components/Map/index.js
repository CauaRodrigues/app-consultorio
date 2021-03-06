import React from 'react';
import './style.css';

const ContactMap = () => {
    return(
        <div className="container-map">
            <div className="mapaIframe">
                <iframe title="mapa do local" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7800692016176!2d-46.72392448554079!3d-23.648046070683066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce510e8d3746ed%3A0x3e9f3a76e1ebfb69!2sEscola%20SENAI%20Su%C3%AD%C3%A7o-Brasileira%20Paulo%20Ernesto%20Tolle!5e0!3m2!1spt-BR!2sbr!4v1634662266862!5m2!1spt-BR!2sbr"
                    allowfullscreen="" loading="lazy">
                </iframe>
            </div>

        </div>
    );
}

export default ContactMap;