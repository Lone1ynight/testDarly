import React from 'react';
import './style.scss';
import Table from 'react-bootstrap/Table';
import {GetDevelopers, useFetchAllItemsQuery} from '../../api/getDevelopers';


export const TableDevs = () => {
	const {data: devs} = useFetchAllItemsQuery('');
	const headers =  devs?.map((item: GetDevelopers) => Object.keys(item)).reduce((maxArr: string[], arr: string[]) => maxArr.length > arr.length ? maxArr : arr, '');

	const info = devs?.map((item: GetDevelopers) => Object.values(item));
	console.log(info, devs);
	return(
		<Table  striped bordered hover variant="dark">
			<thead>
				<tr>
					{headers?.map((header: string, index:number) => <th key={index}>{header}</th>)}
				</tr>
			</thead>
			<tbody>
				{devs?.map((dev: GetDevelopers) =>
					<tr key={dev.id}>
						<td>{Object.values(dev)[0]}</td>
						<td>{dev.name}</td>
						<td>{dev.age}</td>
						<td>{dev.language}</td>
						<td>{dev.framework}</td>
					</tr>
				)}

				{/*{info?.map((dev: string[] | number[]) =>*/}
				{/*	<tr>*/}
				{/*		{*/}
				{/*			dev.map((item: string | number) =>*/}
				{/*				<td>{item}</td>*/}
				{/*			)*/}
				{/*		}*/}
				{/*	</tr>*/}
				{/*)}*/}

			</tbody>
		</Table>
	);
};