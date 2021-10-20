import React from 'react';
import './style.css';

const CardItems = (props) => {
    return (
        <section className="card-items">

            <div className="plano">
                <h3 className="nome-plano">
                    {props.plano}
                </h3>
                <p className="descricao">
                    {props.descricaoPlano}
                </p>
            </div>

            <div className="precos">
                <div className="preco">
                    <p>{props.precoMensal} Mensal</p>
                </div>

                <div className="preco">
                    <p>{props.precoAnual} Anual</p>
                </div>
            </div>
            

            <div className="container-button">
                <button type="button" className="button-contratar">Contratar</button>
            </div>

        </section>
    );
}

export default CardItems;
