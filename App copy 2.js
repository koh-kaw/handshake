import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {GalioProvider, Block} from 'galio-framework';
import materialTheme from './constants/Theme';
import {enableScreens} from 'react-native-screens';
enableScreens();

import {NavigationContainer} from '@react-navigation/native';
import Screens from './navigation/Screens';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <NavigationContainer>
        <GalioProvider theme={materialTheme}>
          <Block flex>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }
}
