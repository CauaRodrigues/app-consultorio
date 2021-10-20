import React from "react";
import './style.css';

function Services() {
	return (
		<div className="home-apresentacao">
			<div className="limitar-container">
				<h1>Os melhores aparelhos dentários!</h1>
				<p>
					Confira abaixo todas as especialidades odontológicas que oferecemos!
				</p>

				<ul className="lista-servicos">
					<li>
						<img src="assets/dente.png" alt="logo" title="logo" />
						<p>Pré-avaliação</p>
					</li>

					<li>
						<img src="assets/dente.png" alt="logo" title="logo" />
						<p>Aparelhos Dentários</p>
					</li>

					<li>
						<img src="assets/dente.png" alt="logo" title="logo" />
						<p>Exames de Imagem Digital</p>
					</li>

					<li>
						<img src="assets/dente.png" alt="logo" title="logo" />
						<p>Clareamento Dental</p>
					</li>

					<li>
						<img src="assets/escova-de-dente.png" alt="logo" title="logo" />
						<p>Estética Dentaria</p>
					</li>

					<li>
						<img src="assets/escova-de-dente.png" alt="logo" title="logo" />
						<p>Cirurgias</p>
					</li>

					<li>
						<img src="assets/escova-de-dente.png" alt="logo" title="logo" />
						<p>Implantes Dentários</p>
					</li>

					<li>
						<img src="assets/escova-de-dente.png" alt="logo" title="logo" />
						<p>Restauração</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Services;
