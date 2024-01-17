import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../screens/Tab';
import ChatBot from '../screens/Chatbot/chatBot';
import Menu from '../screens/Menu/menu';
import Profile from '../screens/Profile/profile';

const Tab = createBottomTabNavigator();

interface TabWithText {
  icon: string;
  iconFocused: string;
  text: string;
  focused: boolean;
}

const TabWithText: React.FC<TabWithText> = ({
  icon,
  text,
  focused,
  iconFocused,
}) => {
  return (
    <View
      style={[
        focused && styles.circle,
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: text === 'Profile' ? 0 : 5,
        },
      ]}>
      <Image style={styles.tabIcon} source={focused ? iconFocused : icon} />
      <Text style={focused ? styles.tabTextFocused : styles.tabText}>
        {text}
      </Text>
    </View>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Tabs}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabWithText
              icon={require('../assets/home.png')}
              iconFocused={require('../assets/home.png')}
              text={route.name === 'Home' ? 'Home' : ''}
              focused={focused}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabWithText
              icon={require('../assets/menu.png')}
              iconFocused={require('../assets/menu.png')}
              text={route.name === 'Menu' ? 'Menu' : ''}
              focused={focused}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Chatbot"
        component={ChatBot}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabWithText
              icon={require('../assets/chatbot.png')}
              iconFocused={require('../assets/chatbot.png')}
              text={route.name === 'Chatbot' ? 'Chatbot' : ''}
              focused={focused}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Calendar"
        component={Profile}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabWithText
              icon={require('../assets/calendar.png')}
              iconFocused={require('../assets/calendar.png')}
              text={route.name === 'Calendar' ? 'Calendar' : ''}
              focused={focused}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabWithText
              icon={require('../assets/profile.png')}
              iconFocused={require('../assets/profile.png')}
              text={route.name === 'Profile' ? 'Profile' : ''}
              focused={focused}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  circle: {
    padding: 5,
    borderRadius: 24,
    backgroundColor: '#5B1FFF1F',
    marginRight: 7,
    paddingLeft: 4

  },
  tabBarStyle: {
    height: 60,
    display: 'flex',
    paddingLeft: 24,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabBarLabelStyle: {
    color: '#8357E5',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 12,
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginTop: 2,
  },
  tabText: {
    color: 'white',
    fontSize: 10,
    marginTop: 0,
    opacity: 0,
  },
  tabTextFocused: {
    color: '#8357E5',
    fontSize: 12,
    marginLeft: 0,
    opacity: 1,
    marginRight: 0
  },
});

export default BottomTabNavigation;
