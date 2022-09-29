import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {Developer} from '../interfaces/interfaces';

export const developersAPI = createApi({
	reducerPath: 'itemsAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
	tagTypes: ['Devs'],
	endpoints: (build) => ({
		fetchAllItems: build.query({
			async queryFn(_arg, _queryApi, _extraOptions, fetch) {
				const result = await fetch(`/developers?_limit=${_arg}`);
				const devs = result.data as Developer[];
				return {data: devs};
			},
			providesTags: result => ['Devs']
		}),
		createDev: build.mutation<Developer, Developer>({
			query: (post) => ({
				url: '/developers',
				method: 'POST',
				body: post
			}),
			invalidatesTags: ['Devs']
		}),
	})
});

export const {useFetchAllItemsQuery, useCreateDevMutation} = developersAPI;
