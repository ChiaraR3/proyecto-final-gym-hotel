import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/inicio-login.scss";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Inicio = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.setShowNavbar(false);
	}, []);

	return (
		<div className="container h-100 login p-0 escritorio">
			<div className="p-4 inicio text-center">
				<Row>
					<Col xs={12} sm={6}>
						<Image src={require(`../../img/imagen-gym-inicio.png`)} width="90%" />
					</Col>
					<Col xs={12} sm={6} className="bloque-inicio">
						<span className="mt-4 text-dark subtitulo">Bienvenido a</span>
						<h1 className="text-dark titulo">APPTIVATE</h1>
						<Link to="/login" className="text-center">
							<Button className="button-inicio w-75" size="lg">
								¡EMPEZAMOS!
							</Button>
						</Link>
					</Col>
				</Row>
			</div>
		</div>
	);
};
