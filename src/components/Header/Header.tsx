import React, {Dispatch, FC, SetStateAction} from 'react';
import './style.scss';

interface HeaderProps {
	openModal: boolean,
	setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const Header: FC<HeaderProps> = ({openModal, setOpenModal}) => {
	const openModalWindow = () => {
		setOpenModal(true);
	};
	return(
		<div className="header">
			<div className="header title">Table</div>
			<div className="header add" onClick={() => openModalWindow()}>Add developer</div>
		</div>
	);
};