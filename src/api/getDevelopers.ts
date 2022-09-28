import axios from 'axios';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


// export const getItems = async () => {
// 	const {data} = await axios({
// 		method: 'get',
// 		url: 'http://localhost:3001/items'
// 	});
// 	console.log(data);
// 	return data;
// 	// dispatch(setStarships(data.resu lts));
// };

export interface GetDevelopers {
	id: number,
	name: string,
	age: number,
	language: string,
	framework: string
}

export const developersAPI = createApi({
	reducerPath: 'itemsAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
	tagTypes: ['Items'],
	endpoints: (build) => ({
		fetchAllItems: build.query({
			query: () => ({
				url: '/developers',
				// params: {
				// 	_limit: limit
				// }
			}),
			providesTags: result => ['Items']
		}),
		// createPost: build.mutation<IPost, IPost>({
		// 	query: (post) => ({
		// 		url: '/posts',
		// 		method: 'POST',
		// 		body: post
		// 	}),
		// 	invalidatesTags: ['Post']
		// }),
		// updatePost: build.mutation<IPost, IPost>({
		// 	query: (post) => ({
		// 		url: `/posts/${post.id}`,
		// 		method: 'PUT',
		// 		body: post
		// 	}),
		// 	invalidatesTags: ['Post']
		// }),
		// deletePost: build.mutation<IPost, IPost>({
		// 	query: (post) => ({
		// 		url: `/posts/${post.id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: ['Post']
		// }),
	})
});

export const {useFetchAllItemsQuery} = developersAPI;
