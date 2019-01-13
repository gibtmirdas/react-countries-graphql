import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Motor from './components/motor';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

class App extends Component {

  constructor(props){
    super(props);
    this.client = new ApolloClient({
      uri: "https://countries.trevorblades.com/"});
  }

  render() {
    return (
      <div className="App container">
        <h1>Countries list</h1>
        <ApolloProvider client={this.client}>
          <Motor />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
