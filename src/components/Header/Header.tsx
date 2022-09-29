import React, {Dispatch, FC, SetStateAction} from 'react';
import './style.scss';

export interface newDevStateOpen {
	newDevOpen: boolean,
	setNewDevOpen: Dispatch<SetStateAction<boolean>>
}

export const Header: FC<newDevStateOpen> = ({newDevOpen, setNewDevOpen}) => {
	const openModalWindow = () => {
		setNewDevOpen(true);
	};

	return(
		<div className="header">
			<div className="header title">Table</div>
			<div className="header add" onClick={() => openModalWindow()}>Add developer</div>
		</div>
	);
};