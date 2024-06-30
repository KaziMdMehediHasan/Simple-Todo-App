import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
type TTask = {
    id: string;
    title: string;
    description: string;
    priority: string;
    isCompleted: boolean;
}
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => {
                //! 3.this is another way to use params or search query
                const params = new URLSearchParams();

                if (priority) {
                    params.append('priority', priority);
                }
                return {
                    //! 1.vanilla way to implement query search
                    // url: `/tasks?priority=${priority}`,
                    url: `/tasks`,
                    method: 'GET',
                    params: params
                    //!2.one way to do this-> params: { priority }
                }
            },
            providesTags: ['todo'],
        }),
        addTodo: builder.mutation({
            query: (data) => {
                console.log("inside baseApi", data);
                return {
                    url: '/task',
                    method: 'POST',
                    body: data //!this field requires object
                }
            },
            invalidatesTags: ['todo']
        }),
        updateTodo: builder.mutation({
            query: (options) => {
                console.log("inside baseApi =>", options);
                return {
                    url: `/task/${options.id}`,
                    method: 'PUT',
                    body: options.data //!this field requires object
                }
            },
            invalidatesTags: ['todo']
        })
    }),
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = baseApi;