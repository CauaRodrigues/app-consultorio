import React from "react";
import { Link } from "react-router-dom";
import Services from "../../components/Services";
import StructurePage from '../../components/StructurePage';
import './style.css';

const Home = () => {
    return(
        <StructurePage>
            
            <Services />

            <h2 className="titulo-sessao">Por que usar <b>aparelho dentários</b></h2>

            <img className="img-aparelho" src="assets/aparelho.png" alt="imagem do uso de um aparelho" title="aparelho dentário" />

            <ul className="lista-sobre-aparelho limitar-container">
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                </li>
                
                <li>
                    <h3>Melhorar a dicção e a higiene bucal</h3>
                    <p>Muitos pessoas não conseguem nem usar fio dental devido a posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma mais ampla.</p>
                </li>
                
                <li>
                    <h3>Corrigir espaços entre os dentes</h3>
                    <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                </li>
            </ul>

            <div className="depoimentos">
                <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>

                <ul className="lista-depoimentos">
                    <li>
                        <img className="img-aparelho" src="assets/cliente01.png" alt="Depoimento do cliente Alberto Silva" title="Depoimento do cliente Alberto Silva" />
                        <p>Alberto Silva</p>
                        <p>"Usei aparelho por anos e agora posso sorrir novamente."</p>
                    </li>
                    
                    <li>
                        <img className="img-aparelho" src="assets/cliente02.png" alt="Depoimento do cliente Eliana Oliveira" title="Depoimento do cliente Eliana Oliveira" />
                        <p>Eliana Oliveira</p>
                        <p>"Meus dentes eram espaçados e depois de 2 anos estão no lugar certo."</p>
                    </li>
                    
                    <li>
                        <img className="img-aparelho" src="assets/cliente03.png" alt="Depoimento do cliente Maria Souza" title="Depoimento do cliente Maria Souza" />
                        <p>Maria Souza</p>
                        <p>"Comecei a usar ano passado e já estou sentindo a diferença."</p>
                    </li>
                </ul>
            </div>

            <div>
                <Link to="/Contato" className="btn-contato">Entrar em contato</Link>
            </div>

        </StructurePage>
    );
}

export default Home;