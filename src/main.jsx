import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'

import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta"
});




const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
