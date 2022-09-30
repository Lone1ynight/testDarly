import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {Developer} from '../interfaces/interfaces';

const developers = '/developers';

export const developersAPI = createApi({
	reducerPath: 'itemsAPI',
	baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_URL_API}),
	tagTypes: ['Devs'],
	endpoints: (build) => ({
		fetchAllItems: build.query({
			async queryFn(_arg, _queryApi, _extraOptions, fetch) {
				try {
					const result = await fetch(`${developers}?_limit=${_arg}`);
					const devs = result.data as Developer[];
					console.log(devs);
					return {data: devs};
				} catch (e) {
					console.log(e);
					return {data: null};
				}
			},
			providesTags: () => ['Devs']
		}),
		createDev: build.mutation<Developer, Developer>({
			query: (post) => ({
				url: `${developers}`,
				method: 'POST',
				body: post
			}),
			invalidatesTags: ['Devs']
		}),
	})
});

export const {useFetchAllItemsQuery, useCreateDevMutation} = developersAPI;
