import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppProvider from './src/navigation/appProvider'
import AppLayout from './src/navigation/appLayout'

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </SafeAreaProvider>
  )
}

export default App
