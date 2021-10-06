import React from 'react';
import {StatusBar} from 'react-native';

import {ApolloProvider} from '@apollo/client';

import {Home} from './screen/Home';
import {client} from './constants';

const App = () => {
  return (
    <>
      <StatusBar />
      <Home />
    </>
  );
};

export default (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
