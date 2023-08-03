import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/Temas';

import Rotas from './src/routes/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      {/* Importando nossas rotas na aplicação: */}
      <Rotas />
    </NativeBaseProvider>
  );
}
