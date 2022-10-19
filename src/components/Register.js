import React from "react";
import { Row, Container, Col, Card, Form } from "react-bootstrap";

const Register = () => {
	return (
		<div>
			<Container className="mt-3">
				<Row>
					<Col xs={3}>
						<Card className="shadow-lg">
							<Card.Header
								className="p-3"
								style={{ backgroundColor: "orange" }}
							>
								<h4>Register</h4>
							</Card.Header>
							<Card.Body>
								<Form>
									<Form.Group>
										<Form.Control
											type="text"
											placeholder="user name"
										/>
									</Form.Group>
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
