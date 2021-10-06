import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Exercise = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Container>
				<Row>
					<Col xs={6} className="mb-4">
						<h1>EXERCISE 1</h1>
					</Col>
					<Col xs={6} className="mb-4">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="mb-4">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/i27K2ry9jEo"
							title="YouTube video player"></iframe>
					</Col>
				</Row>
				<Row>
					<Col xs={4} className="mb-4">
						<span>5 min</span>
					</Col>
					<Col xs={4} className="mb-4">
						<span> 10 reps</span>
					</Col>
					<Col xs={4} className="mb-4">
						<span>10 reps each</span>
					</Col>
				</Row>
				<Row>
					<Col xs={6} className="px-2">
						<div className="text-center">TIMER</div>
					</Col>
					<Col xs={2} className="px-2">
						<Button className="p-2" variant="primary">
							Start
						</Button>
					</Col>
					<Col xs={2} className="px-2">
						<Button className="p-2" variant="danger">
							Stop
						</Button>
					</Col>
					<Col xs={2} className="px-2">
						<Button className="p-2" variant="success">
							Save
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs={6} className="text-center my-4">
						<Button variant="outline-primary">List of exercises</Button>
					</Col>
					<Col xs={6} className="text-center my-4">
						<Button variant="primary">Next exercise</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
