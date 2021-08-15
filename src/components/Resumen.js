import React from 'react';
import { primerMayuscula } from '../helper';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//estilos css
const ContenedorResumen = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: #fff;
	margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
	const { marca, year, plan } = datos;
	return (
		<ContenedorResumen>
			<h2>Resumen de cotización</h2>
			<ul>
				<li>Marca: {primerMayuscula(marca)} </li>
				<li>Plan: {primerMayuscula(plan)} </li>
				<li>Año del auto: {year}</li>
			</ul>
		</ContenedorResumen>
	);
};

//proptypes para documentacion de las props
Resumen.propTypes = {
	datos: PropTypes.object.isRequired,
};

export default Resumen;
