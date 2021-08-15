import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper';
import PropTypes from 'prop-types';

//styles components para el formulario
const Campo = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	display: block;
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
	-webkit-appearance: none;
`;

const InputRadio = styled.input`
	margin: 0 1rem;
`;

const Boton = styled.button`
	background-color: #00838f;
	font-size: 16px;
	width: 100%;
	padding: 1rem;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	transition: background-color 0.3s ease;
	margin-top: 2rem;

	&:hover {
		background-color: #26c6da;
		cursor: pointer;
	}
`;

const Error = styled.div`
	background-color: red;
	color: white;
	padding: 1rem;
	width: 100%;
	text-align: center;
	margin-bottom: 2rem;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {
	//state del formulario
	const [datos, guardarDatos] = useState({
		marca: '',
		year: '',
		plan: '',
	});

	//state para el error
	const [error, guardarError] = useState(false);

	//extraemos las propiedades del state datos
	const { marca, year, plan } = datos;

	//leer datos del formulario y guardarlos en el state
	const obtenerInformacion = (e) => {
		guardarDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	//funcion del submit para validar el formulario
	const cotizarSeguro = (e) => {
		e.preventDefault();

		if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
			guardarError(true);
			return;
		}

		guardarError(false);

		//base para realizar los calculos
		let resultado = 2000;

		//si la validacion pasa, obtener la diferencia de años
		const diferencia = obtenerDiferenciaYear(year);

		//por cada año restar el 3%
		resultado -= (diferencia * 3 * resultado) / 100;

		//se establecen los incrementos segun la marca,americano 15% de incremento
		//asiatico 5% de incremento
		//europeo 30% de incremento
		resultado = calcularMarca(marca) * resultado;
		console.log(resultado);

		//plan basico aumenta 20% al valor del seguro
		//plan completo incrementa 50%
		const incrementoPlan = obtenerPlan(plan);
		resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

		//spinner
		guardarCargando(true);
		setTimeout(() => {
			guardarCargando(false);
			//total
			guardarResumen({
				cotizacion: Number(resultado),
				datos,
			});
		}, 3000);
	};

	return (
		<form onSubmit={cotizarSeguro}>
			{error ? <Error>Todos los campos son obligatorios</Error> : null}
			<Campo>
				<Label>Marca</Label>
				<Select name="marca" value={marca} onChange={obtenerInformacion}>
					<option value="">--Seleccione--</option>
					<option value="americano">Americano</option>
					<option value="europeo">Europeo</option>
					<option value="asiatico">Asiatico</option>
				</Select>
			</Campo>

			<Campo>
				<Label>Año</Label>
				<Select name="year" value={year} onChange={obtenerInformacion}>
					<option value="">-- Seleccione --</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
				</Select>
			</Campo>

			<Campo>
				<Label>Plan</Label>
				<InputRadio
					type="radio"
					name="plan"
					value="basico"
					cheked={plan === 'basico'}
					onChange={obtenerInformacion}
				/>
				Básico
				<InputRadio
					type="radio"
					name="plan"
					value="completo"
					cheked={plan === 'completo'}
					onChange={obtenerInformacion}
				/>
				Completo
			</Campo>

			<Boton type="submit">Cotizar</Boton>
		</form>
	);
};

//proptypes para documentacion
Formulario.propTypes = {
	guardarResumen: PropTypes.func.isRequired,
	guardarCargando: PropTypes.func.isRequired,
};

export default Formulario;
