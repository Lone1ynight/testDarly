import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useCreateDevMutation} from '../../service/getDevelopers';
import './style.scss';
import {Developer} from '../../interfaces/interfaces';

interface CreateNewDevProps {
	setNewDevOpen: Dispatch<SetStateAction<boolean>>
}

export const CreateNewDev: FC<CreateNewDevProps> = ({setNewDevOpen}) => {
	const [createDev, {isSuccess}] = useCreateDevMutation();

	const initState = {
		name: '',
		job: '',
		phoneNumber: '',
		email: '',
		age: +'',
	};

	const [newDev, setNewDev] = useState<Developer>(initState);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDev({
			...newDev,
			[e.target.name]: e.target.value
		});
	};

	const cancelNewDev = () => {
		setNewDevOpen(false);
		setNewDev(initState);
	};

	const createNewDev = () => {
		createDev(newDev);
	};

	useEffect(() => {
		if (isSuccess){
			cancelNewDev();
		}
	}, [isSuccess]);

	return (
		<>
			<motion.tr
				layout
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{
					opacity: 0,
				}}
				transition={{opacity: {duration: 0.8}}}
				className="rowCreate"
			>
				{/*<form>*/}
				{Object.keys(initState).map((item, index) => <td key={index}><input className="inputNewDev" name={item} onChange={onInputChange}/></td>)}
				{/*</form>*/}
			</motion.tr>
			<tr>
				<td className="btnTd" colSpan={5}>
					<button onClick={() => cancelNewDev()} className="btnCreate">Отменить</button>
					<button onClick={() => createNewDev()} className="btnCreate">Подтвердить</button>
				</td>
			</tr>
		</>
	);
};