// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"]
    }),
    getProduct: builder.query({
      query: () => `/client/products`,
      providesTags: ['Products']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useGetProductQuery } = userApi
