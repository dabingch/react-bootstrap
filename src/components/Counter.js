import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Counter = () => {
	const [state, setState] = useState({
		count: 0,
	});

	const incr = () => {
		setState({
			count: state.count + 1,
		});
	};

	const desc = () => {
		setState({
			count: state.count - 1,
		});
	};

	return (
		<div>
			<Container className="mt-3">
				<Row>
					{/* xs for specifying columns */}
					<Col xs={4}>
						<Card className="shadow-lg">
							<Card.Body>
								<p className="display-2">{state.count}</p>
								<Button
									onClick={incr}
									variant="success"
									className="m-1"
								>
									increment
								</Button>
								<Button
									onClick={desc}
									variant="warning"
									className="m-1"
								>
									decrement
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Counter;
