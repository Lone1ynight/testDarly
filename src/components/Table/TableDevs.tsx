import React, {FC, useEffect, useState} from 'react';
import './style.scss';
import Table from 'react-bootstrap/Table';
import {useFetchAllItemsQuery} from '../../service/getDevelopers';
import {newDevStateOpen} from '../Header/Header';
import {Row} from '../Row/Row';
import {CreateNewDev} from '../CreateNewDev/CreateNewDev';
import {Developer} from '../../interfaces/interfaces';

export const TableDevs: FC<newDevStateOpen> = ({newDevOpen, setNewDevOpen}) => {
	const [limit, setLimit] = useState<number>(15);
	const {data: devs, refetch} = useFetchAllItemsQuery(limit);
	const headers = devs?.map((item: Developer) => Object.keys(item)).reduce((maxArr: string[], arr: string[]) => maxArr.length > arr.length ? maxArr : arr, []).splice(0,5);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function (){
			document.removeEventListener('scroll', scrollHandler);
		};
	});

	const scrollHandler = (e: any) => {
		if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1 && devs?.length ===limit) {
			setLimit(limit+5);
		}
	};

	useEffect(() => {
		refetch();
	}, [limit]);

	return (
		<div className="table" id="table">
			{ devs ?
				<Table striped bordered hover variant="dark" size="rl">
					<thead>
						<tr className="headerTable">
							{headers?.map((header: string, index: number) => <th key={index}>{header}</th>)}
						</tr>
					</thead>
					<tbody>
						{newDevOpen && <CreateNewDev setNewDevOpen={setNewDevOpen}/>}
						{devs?.map((dev: Developer) =>
							<Row dev={dev} key={dev.id}/>
						)}
					</tbody>
				</Table>
				: <div>loading</div>
			}
		</div>);
};