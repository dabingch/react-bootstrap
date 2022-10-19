import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Navbar, Container } from "react-bootstrap";
import Counter from "./components/Counter";
import Register from "./components/Register";

function App() {
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark" expand="sm">
				<Container>
					<Navbar.Brand>React Bootstrap</Navbar.Brand>
				</Container>
			</Navbar>

			<Counter />
			<Register />
		</div>
	);
}

export default App;
