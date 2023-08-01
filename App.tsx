import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/Temas';

import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      {/* <Login /> */}
      <Cadastro />
    </NativeBaseProvider>
  );
}
