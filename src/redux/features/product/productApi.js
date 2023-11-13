import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://product-hub-server.vercel.app/'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'product/all-products'
        })
    })
});

export const { useGetProductsQuery } = productApi;
export default productApi;