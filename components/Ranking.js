import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Block, theme, Card, Text} from 'galio-framework';
import {Avatar, Image, Badge, SearchBar, Input} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

const {height, width} = Dimensions.get('screen');

const Ranking = () => {
  return (
    //<Block center space="between" style={(styles.horizon, {zIndex: 2})}>
    <Block shadow style={styles.rankingCard}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.horizon}>
        <Avatar
          rounded
          showAccessory={true}
          accessory={{name: 'crown', type: 'font-awesome-5'}}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1248480135340150785/W28cMDRi_400x400.jpg',
          }}
          size={90}
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Avatar
          rounded
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1192856511745118208/mlM2dOZn_400x400.jpg',
          }}
          size={85}
          onPress={() => navigation.navigate('Onboarding')}
        />

        <Avatar
          rounded
          source={{
            uri:
              'https://blogimg.goo.ne.jp/user_image/63/90/697ade91513890a10e25bfb675f11b4e.jpg',
          }}
          size={80}
          onPress={() => navigation.navigate('Onboarding')}
        />

        <Avatar
          rounded
          source={{
            uri:
              'https://img1.girl-secret.com/wp-content/uploads/2017/06/4cda66bc31061f0cc2e84776b6e79492.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Avatar
          rounded
          source={{
            uri:
              'https://img1.girl-secret.com/wp-content/uploads/2017/06/7d0ccc83016debe27ff7fa7cb695a8df.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Avatar
          rounded
          source={{
            uri:
              'https://img1.girl-secret.com/wp-content/uploads/2017/06/6071e39f7c18b7eeb557147231d1795b.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Avatar
          rounded
          source={{
            uri: 'https://www.crank-in.net/img/db/1345998_1200.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Avatar
          title="浜辺美波"
          rounded
          source={{
            uri: 'https://www.crank-in.net/img/db/1345998_1200.jpg',
          }}
          size="large"
          overlayContainerStyle={styles.avatar}
          onPress={() => navigation.navigate('Onboarding')}
        />
      </ScrollView>
    </Block>
    //</Block>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  rankingCard: {
    paddingHorizontal: 5,
    //backgroundColor: 'white',
  },
  ranking: {
    color: 'yellow',
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: theme.SIZES.BASE * 0.5,
    paddingTop: theme.SIZES.BASE * 0.2,
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
});
