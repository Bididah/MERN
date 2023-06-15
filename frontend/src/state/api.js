// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
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

export const getProduct = () => {
  try {
    return fetch(`${process.env.REACT_APP_BASE_URL}/client/products`).then(res => res.json())
  } catch (error) {
    return error
  }
}

export const postProduct = (product) => {
  try {
    return fetch(`${process.env.REACT_APP_BASE_URL}/client/postProduct`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json())
    
  } catch (error) {
    return error
  }

}

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useGetProductQuery } = userApi
