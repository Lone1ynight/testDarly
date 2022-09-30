import React, {FC, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {useCreateDevMutation, useFetchAllItemsQuery} from '../../service/developersAPI';
import {newDevStateOpen} from '../Header/Header';
import {Row} from '../Row/Row';
import {CreateNewDev} from '../CreateNewDev/CreateNewDev';
import {Developer} from '../../interfaces/interfaces';
import { Formik, Form } from 'formik';
import {newDevValidation} from '../../schemas/newDevValidation';
import {Loader} from '../Loader/Loader';
import './style.scss';

export const TableDevs: FC<newDevStateOpen> = ({newDevOpen, setNewDevOpen}) => {
	const [limit, setLimit] = useState<number>(15);
	const {data: devs, refetch} = useFetchAllItemsQuery(limit);
	const headers = devs?.map((item: Developer) => Object.keys(item)).reduce((maxArr: string[], arr: string[]) => maxArr.length > arr.length ? maxArr : arr, []).splice(0,5);

	const [createDev, {isSuccess}] = useCreateDevMutation();

	const initState = {
		name: '',
		job: '',
		phoneNumber: '',
		email: '',
		age: '',
	};

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
			{devs ?
				<Formik
					initialValues={initState}
					onSubmit={async (values, {resetForm}) => {
						await createDev(values);
						setNewDevOpen(false);
						resetForm();
					}}
					validationSchema={newDevValidation}>
					<Form>
						<Table striped bordered hover variant="dark" size="rl">
							<thead>
								<tr className="headerTable">
									{headers?.map((header: string, index: number) => <th key={index}>{header}</th>)}
								</tr>
							</thead>
							<tbody>
								{
									newDevOpen &&
									<CreateNewDev
										setNewDevOpen={setNewDevOpen}
										initState={initState}
										isSuccess={isSuccess}
									/>
								}
								{devs?.map((dev: Developer) =>
									<Row dev={dev} key={dev.id}/>
								)}
							</tbody>
						</Table>
					</Form>
				</Formik>
				:
				<div className="loaderWrapper"><Loader/></div>
			 }
		</div>);
};