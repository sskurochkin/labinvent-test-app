import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost:3001/api/v1/method/',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth

//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         headers.set('authorization')
//       }

//       return headers
//     },
//   })

export const apiMethod = createApi({
	reducerPath: "apiMethod", //название редьюсера
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3001/api/v1/method/",
	}),
	// prepareHeaders: (headers) => {
	// 	headers.set("Content-Type", "application/json;charset=UTF-8");
	// 	headers.set("Authorization", "anonymous");

	// 	return headers;
	// },

	// tagTypes: ['Heroes'],// свзь между запросами
	endpoints: (builder) => ({
		getCurrentMethod: builder.query({
			//без изменений
			query: () => "current",
			method: "GET",
			// providesTags: ['Heroes'],//связь
		}),
		// createHero: builder.mutation({ //меняющийся
		//     query: hero => ({
		//         url: '/heroes',
		//         method: 'POST',
		//         body: hero
		//     }),
		//     invalidatesTags: ['Heroes']//связь
		// }),
		// deleteHero: builder.mutation({
		//     query: id=>({
		//         url: `/heroes/${id}`,
		//         method: 'DELETE',
		//     }),
		//     invalidatesTags: ['Heroes']
		// })
	}), //операции которые будут проводиться по базовому адресу
});

export const { useGetCurrentMethodQuery } = apiMethod;
