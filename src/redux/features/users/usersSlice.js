const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/users" }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (id) => `user/${id}`,
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useFetchUserQuery, useCreateUserMutation } = usersApi;
