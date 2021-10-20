import React from 'react'
import StructurePage from '../../components/StructurePage';
import CardItems from '../../components/CardItems';
import './style.css';

function Planos() {
    return (
        <StructurePage>
            <div className="container-cards">
                <h2 className="titulo-sessao">Planos <b>Odontológicos</b></h2>
                <div className="cards">
                    <CardItems 
                        plano="Básico"
                        precoMensal="R$89,79"
                        precoAnual="R$189,39"
                        descricaoPlano="1 pessoa, 
                                Estética, 
                                Pré-avaliação, 
                                Restauração"
                    />

                    <CardItems 
                        plano="Padrão"
                        precoMensal="R$139,25"
                        precoAnual="R$268,99"
                        descricaoPlano="3 pessoas,
                                Plano Básico,
                                Aparelhos Dentários,
                                Implantes Dentários,"
                    />

                    <CardItems 
                        plano="Premium"
                        precoMensal="R$146,90"
                        precoAnual="R$360,75"
                        descricaoPlano="5 Pessoas,
                                Plano Padrão,
                                Clareamento Dental,
                                Cirurgias,
                                Exames de Imagem Digital"
                    />
                </div>
            </div>
        </StructurePage>
    )
}

export default Planos
