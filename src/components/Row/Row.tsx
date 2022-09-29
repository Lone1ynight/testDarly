import React, {FC} from 'react';
import {motion} from 'framer-motion';
import {Developer} from '../../interfaces/interfaces';

export interface RowProps {
	dev: Developer
}

export const Row: FC<RowProps> = ({dev}) => {
	return <motion.tr
		layout
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{
			opacity: 0,
		}}
		transition={{ opacity: { duration: 0.8 } }}

	>
		<td className="rowInfo">{dev.name}</td>
		<td>{dev.job}</td>
		<td>{dev.phoneNumber}</td>
		<td>{dev.email}</td>
		<td>{dev.age}</td>
	</motion.tr>;
};