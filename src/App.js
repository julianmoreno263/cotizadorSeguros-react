import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

//style component para centrar todo el contenido principal, se crea un div
const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

//style component para el formulario principal de la app,sera otro div
const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`;

function App() {
	//state para guardar los resultados del formulario
	const [resumen, guardarResumen] = useState({});
	const { datos, cotizacion } = resumen;
	//state para el spinner
	const [cargando, guardarCargando] = useState(false);

	return (
		<Contenedor>
			<Header titulo="Cotizador de Seguros" />
			<ContenedorFormulario>
				<Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando} />
				{cargando ? <Spinner /> : null}
				{datos ? <Resumen datos={datos} /> : null}
				{!cargando ? <Resultado cotizacion={cotizacion} /> : null}
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
