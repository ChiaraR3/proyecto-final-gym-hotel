import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "../../styles/home.scss";

export const Profile = () => {
	const [plan, setPlan] = useState([]);
	const [time, setTime] = useState([]);
	const { store, actions } = useContext(Context);
	const token = localStorage.getItem("jwt-token");

	async function getPlan() {
		const response = await fetch(process.env.BACKEND_URL + "/api/profile", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		});
		console.log(response);
		const responseJson = await response.json();
		setPlan(responseJson);
		console.log(responseJson);
	}

	async function getAwards() {
		const response = await fetch(process.env.BACKEND_URL + "/api/get-client-awards", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		});
		console.log(response);
		const responseJson = await response.json();
		setTime(responseJson);
		console.log(responseJson);
	}

	useEffect(() => {
		getPlan();
		getAwards();
	}, []);

	//REALIZAR FECTH DE LOS DATOS DE USUARIO CON EL PLAN ELEGIDO PARA COGER LOS DATOS DEL PLAN
	//REALIZAR FECHT DEL PLAN ELEGIDO
	return (
		<div className="container">
			<h1>PROFILE</h1>
			<CardGroup className="mb-4" key={plan.id}>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<h5>{plan.name}</h5>
						<Card.Title>Imagen plan chulo elegido</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Text>Este es el plan que vas a relizar durante tu estancia en el hotel </Card.Text>

						<small className="text-muted">
							<Link to={`/plan/${plan.id}/exercises`}>
								<Button variant="outline-dark">Empezar</Button>
							</Link>
						</small>
					</Card.Body>
				</Card>
			</CardGroup>

			<Card className="mb-4">
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Imagen tiempo</Card.Title>
					aquí se puede ver el tiempo de los ejercicios o el acumulado o como funciona o barra de progreso
					<Link to="/time">
						<Button variant="outline-dark">Saber más</Button>
					</Link>
				</Card.Body>
			</Card>
			<Row className="mb-4">
				<h1> AWARDS </h1>
				<Container>
					<Row className="mx-3">
						<Col xs={4} md={4}>
							<Image src="/src/front/img/002-sport.png" roundedCircle />
						</Col>
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" roundedCircle />
						</Col>
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" thumbnailCircle />
						</Col>
					</Row>
					<Row className="mx-3">
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" roundedCircle />
						</Col>
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" roundedCircle />
						</Col>
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" thumbnailCircle />
						</Col>
					</Row>
					<Row className="mx-3">
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" roundedCircle />
						</Col>
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" roundedCircle />
						</Col>
						<Col xs={4} md={4}>
							<Image src="holder.js/171x180" thumbnailCircle />
						</Col>
					</Row>
				</Container>
			</Row>
		</div>
	);
};
