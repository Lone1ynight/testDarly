import React, {Dispatch, FC, SetStateAction} from 'react';
import {motion} from 'framer-motion';
import {Developer} from '../../interfaces/interfaces';
import {Field, ErrorMessage} from 'formik';
import './style.scss';

interface CreateNewDevProps {
	setNewDevOpen: Dispatch<SetStateAction<boolean>>,
	initState: Developer,
	isSuccess: boolean
}

export const CreateNewDev: FC<CreateNewDevProps> = ({setNewDevOpen, initState, isSuccess}) => {

	const cancelNewDev = () => {
		setNewDevOpen(false);
	};

	const renderError = (message: string) => <p className="errorMessage">{message}</p>;

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

				{Object.keys(initState).map((item, index) =>
					<td key={index}>
						<Field className="inputNewDev" name={item}/>
						<ErrorMessage name={item} render={renderError}/>
					</td>)}
			
			</motion.tr>
			<tr>
				<td className="btnTd" colSpan={5}>
					<div className="btns">
						<button className="button" onClick={() => cancelNewDev()}>Cancel</button>
						<button type="submit" className="button">Confirm</button>
					</div>

				</td>
			</tr>
		</>
	);
};