import React, { useState } from "react";
import { Row, Container, Col, Card, Form, Button } from "react-bootstrap";

const Register = () => {
	const [state, setState] = useState({
		user: {
			username: "",
			email: "",
			password: "",
		},
	});

	const updateInput = (e) => {
		setState({
			...state,
			user: {
				...state.user,
				[e.target.name]: e.target.value,
			},
		});
	};

	const register = (e) => {
		e.preventDefault();
		console.log(state.user);
	};

	return (
		<div>
			{/* <pre>{JSON.stringify(state)}</pre> */}
			<Container className="mt-3">
				<Row>
					<Col md={3}>
						<Card className="shadow-lg">
							<Card.Header
								className="p-3"
								style={{ backgroundColor: "orange" }}
							>
								<h4>Register</h4>
							</Card.Header>
							<Card.Body style={{ backgroundColor: "#33333" }}>
								<Form>
									<Form.Group className="mb-3">
										<Form.Control
											name="username"
											onChange={updateInput}
											type="text"
											placeholder="Username"
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control
											name="email"
											onChange={updateInput}
											type="email"
											placeholder="Email"
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control
											name="password"
											onChange={updateInput}
											type="password"
											placeholder="Password"
										/>
									</Form.Group>
									<Button
										onClick={register}
										type="submit"
										variant="success"
									>
										Submit
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Register;
