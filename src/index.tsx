import React, { useEffect } from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './styles/Temas';

import Rotas from './routes/index';
import { api } from './hooks/useApi';

export default function App() {

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      {/* Importando nossas rotas na aplicação: */}
      <Rotas />
    </NativeBaseProvider>
  );
}
