import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './components/HomeScreen';
import Layout from './components/Layout';
import {ChakraProvider} from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <Layout>
      <HomeScreen> </HomeScreen>
    </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
