import React from 'react'
import {createRoot} from "react-dom";
import App from './App.jsx'

import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta"
});




const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>,);


