import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardListRoutes } from './component/onBoard';
//import Welcome from '../screens/Welcome/index';
import Personal from '../screens/Details/PersonalDetails'
import { DataScreen } from '../navigation/component/details'
import { useAuth } from '../screens/context/auth-context';
import { HomeScreen } from '../navigation/component/home'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { authState } = useAuth();
  try {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {!authState?.authenticated ? (
              OnBoardListRoutes.map(screen => (
                <Stack.Screen
                  name={screen.route}
                  options={screen.options}
                  component={screen.component}
                />
              ))
            ) : (
              <>
                {DataScreen.map(screen => (
                  <Stack.Screen
                    name={screen.route}
                    options={screen.options}
                    component={screen.component}
                  />
                ))}

                {HomeScreen.map(screen => (
                  <Stack.Screen
                    name={screen.route}
                    options={screen.options}
                    component={screen.component}
                  />
                ))}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  } catch (error) {
    console.error('Navigation Error:', error);
    return null
  }
}

export default Navigation;
