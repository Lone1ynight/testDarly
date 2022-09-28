import axios from 'axios';

export const getDevelopers = async () => {
	const {data} = await axios({
		method: 'get',
		url: 'http://localhost:3001/developers'
	});
	console.log(data);
	return data;
	// dispatch(setStarships(data.results));
};