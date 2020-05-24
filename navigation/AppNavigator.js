import * as React from 'react';
import {Button, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';
import TalentsScreen from '../screens/Talents';
import ProfileScreen from '../screens/Profile';
import MyPageScreen from '../screens/MyPage';

import {Header} from '../components';

const {width} = Dimensions.get('screen');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const profile = {
  avatar: {uri: 'https://via.placeholder.com/300'},
  name: 'Kohei Kawakura',
  type: 'Seller',
  plan: 'Pro',
  rating: 4.8,
};

const HomeStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
        /*headerMode="screen"
        // https://reactnavigation.org/docs/stack-navigator/
        options={{
          headerStyle: {
            height: 70,
          },
        }}*/
      />
      <Stack.Screen name="Profile" component={ProfileStack} />
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

const TalentsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Talents"
        component={TalentsScreen}
        //options={{headerShown: false}}
      />
      <Stack.Screen name="Onboarding" component={OnboardingStack} />
    </Stack.Navigator>
  );
};

const MyPageStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPageScreen}
        //options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              white
              transparent
              title="Profile"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
      family = 'font-awesome';
    } else if (route.name === 'Onboarding') {
      iconName = 'calendar';
      family = 'font-awesome-5';
    } else if (route.name === 'Talents') {
      iconName = 'users';
      family = 'font-awesome-5';
    } else if (route.name === 'MyPage') {
      iconName = 'user-circle';
      family = 'font-awesome-5';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Onboarding" component={OnboardingStack} />
        <Tab.Screen name="Talents" component={TalentsStack} />
        <Tab.Screen name="MyPage" component={MyPageStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
