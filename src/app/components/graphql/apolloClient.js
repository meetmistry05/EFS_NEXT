import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL, // Fallback to hardcoded URL
  fetch: async (uri, options) => {
    const headers = options?.headers ?? {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
    return fetch(uri, { ...options, headers });
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
    },
  };
});

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL, // GraphQL endpoint URL
});

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  link: ApolloLink.split(
    // Split requests based on operation type
    (operation) => operation.getContext().hasUpload,
    uploadLink, // Use upload link for operations with uploads
    authLink.concat(httpLink), // Use authLink + httpLink for regular operations
  ),
  cache: new InMemoryCache(),
});

export default client;
