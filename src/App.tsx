import ListGroup from './components/ListGroup';

function App() {
	let items = ['New York', 'San', 'Tokyo', 'London', 'Paris'];

	return (
		<div>
			<ListGroup items={items} heading="Citites"></ListGroup>
		</div>
	);
}

export default App;
