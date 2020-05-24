import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import {Block, Button, Text, theme} from 'galio-framework';
import * as Animatable from 'react-native-animatable';

const {height, width} = Dimensions.get('screen');

import materialTheme from '../constants/Theme';

export default class Onboarding extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    let {animation} = this.state;
    const {navigation} = this.props;
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={{
              uri: 'https://wallpaperplay.com/walls/full/2/8/2/13508.jpg',
              //uri:'https://lh3.googleusercontent.com/proxy/S22asP9hdILqNAc92OVvhrTpIt55Gb206qYTVp8HZC3kmJqRN0YrMB7B8xc3PvVedsRWcNpj6NeiT5lOepUQtbp7cX400JRqDO5MhuPm4ohGrDZOCaRJ0El2MGBi7hjK-Y7_OQ',
            }}
            style={{
              height: height,
              width: width,
              marginTop: '-55%',
              zIndex: 1,
            }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{zIndex: 2}}>
            <Block>
              <Animated.View
                style={{
                  opacity: animation,
                }}>
                <Block>
                  <Text color="white" size={45}>
                    こんにちは！
                  </Text>
                </Block>
                <Block row>
                  <Text color="white" size={60}>
                    Handshake
                  </Text>
                </Block>
                <Text size={16} color="rgba(255,255,255,0.6)">
                  Handshakeは、あなたとタレントを近づけます。
                </Text>
              </Animated.View>
            </Block>
            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('App')}>
                GET STARTED
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
