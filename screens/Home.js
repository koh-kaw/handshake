import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Animated,
  View,
} from 'react-native';
import {Block, theme, Card, Text} from 'galio-framework';
import {
  Avatar,
  Image,
  Badge,
  SearchBar,
  Input,
  Divider,
} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

import Ranking from '../components/Ranking';
import NewTalent from '../components/NewTalent';
import Reccomend from '../components/Reccomend';
import TodayTalents from '../components/TodayTalents';

const {height, width} = Dimensions.get('screen');
const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function Home(props) {
  const {navigation} = props;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <Block flex safe style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
        ])}
        scrollEventThrottle={16}>
        <View style={{paddingTop: H_MAX_HEIGHT}}></View>
        <Block style={styles.avatorsContainer}>
          <Text h5 bold style={styles.titleLine}>
            ランキング
          </Text>
          <Ranking />
          <Divider />
        </Block>

        <Block style={styles.avatorsContainer}>
          <Text h5 bold style={styles.titleLine}>
            注目の新着
          </Text>
          <NewTalent />
          <Divider />
        </Block>

        <Block style={styles.cardsContainer}>
          <Text h5 bold style={styles.titleLine}>
            あなたへのおすすめ
          </Text>
          <Reccomend />
        </Block>

        <Block style={styles.cardsContainer}>
          <Text h5 bold style={styles.titleLine}>
            今日話せるタレント
          </Text>
          <TodayTalents />
        </Block>

        <Block style={styles.cardsContainer}>
          <Text h5 bold style={styles.titleLine}>
            イベント
          </Text>
          <TodayTalents />
        </Block>
      </ScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: headerScrollHeight,
          width: '100%',
          overflow: 'hidden',
          zIndex: 999,
          // STYLE
          borderBottomColor: '#EFEFF4',
          borderBottomWidth: 2,
          padding: 10,
          backgroundColor: 'blue',
        }}>
        <Image
          source={{uri: 'https://via.placeholder.com/300'}}
          style={{flex: 1}}
          resizeMode={'contain'}
        />
      </Animated.View>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
  },
  avatorsContainer: {
    //backgroundColor: 'black',
    paddingTop: 5,
    //backgroundColor: theme.COLORS.OFFWHITE,
    backgroundColor: '#fafafa',
  },
  titleLine: {
    color: theme.COLORS.BLACK,
    paddingTop: 10,
    paddingBottom: 8,
  },
  cardsContainer: {
    //backgroundColor: 'black',
    paddingTop: 10,
    //backgroundColor: theme.COLORS.OFFWHITE,
    backgroundColor: '#fafafa',
  },
  rankingCard: {
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  horizonContainer: {},
  ranking: {
    color: 'yellow',
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: theme.SIZES.BASE * 0.5,
    paddingTop: theme.SIZES.BASE * 0.5,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  horizon: {
    paddingVertical: theme.SIZES.BASE,
    //shadowOpacity: 0.5,
    //shadowRadius: 3.0,
  },
  badgeStyle: {
    backgroundColor: 'black',
  },
  avatar: {
    shadowOpacity: 0.5,
  },
  footer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
  },
});
