
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { LogBox } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/screens/context/auth-context';

function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </Provider>
  );
}

export default App;
