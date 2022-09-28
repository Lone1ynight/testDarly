import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './hooks/store';
// import {getItems} from './api/getDevelopers';
import './App.scss';
import {Header} from './components/Header/Header';
import {TableDevs} from './components/Table/TableDevs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const dispatch = useAppDispatch();
	const [openModal, setOpenModal] = useState<boolean>(false);

	// useEffect(() => {
	// 	const items = async () => {
	// 		const devs = await getItems();
	// 		console.log(devs);
	// 	};
	// 	items();
	// }, []);

	return (
		<div className="wrapper">
			<Header openModal={openModal} setOpenModal={setOpenModal}/>
			<TableDevs />
			{openModal && <div>openModal</div>}
		</div>
	);
}
 
export default App;
