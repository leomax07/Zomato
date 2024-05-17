import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProvider from './src/navigation/appProvider';
import AppLayout from './src/navigation/appLayout';
import {Alert} from 'react-native';


const App = () => {
 
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
