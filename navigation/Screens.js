import * as React from 'react';
import {Button, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-vector-icons';

import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';

import {Header} from '../components';

const {width} = Dimensions.get('screen');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Onboarding" component={OnboardingStack} />
    </Stack.Navigator>
  );
};

function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
}

const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
      family = 'font-awesome';
    } else if (route.name === 'Clip') {
      iconName = 'bookmark';
      family = 'font-awesome';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Onboarding" component={OnboardingStack} />
      </Tab.Navigator>
    </Stack.Navigator>
  );
};
