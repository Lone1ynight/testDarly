import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './hooks/store';
import axios from 'axios';
import {getDevelopers} from '../src/api/getDevelopers';
// import './App.css';

function App() {
	const store = useAppSelector(state => state);
	const dispatch = useAppDispatch();
	console.log(store);
	useEffect(() => {
		const getDevs = async () => {
			const devs = await getDevelopers();
			console.log(devs);
		};
		getDevs();
	}, []);
	return <div/>;
}
 
export default App;
