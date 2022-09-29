import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './hooks/store';
import './App.scss';
import {Header} from './components/Header/Header';
import {TableDevs} from './components/Table/TableDevs';
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
