import React, {useState} from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {TableDevs} from './components/TableDevs/TableDevs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [newDevOpen, setNewDevOpen] = useState<boolean>(false);

	return (
		<div className="wrapper">
			<Header newDevOpen={newDevOpen} setNewDevOpen={setNewDevOpen}/>
			<TableDevs newDevOpen={newDevOpen} setNewDevOpen={setNewDevOpen}/>
		</div>
	);
}
 
export default App;
