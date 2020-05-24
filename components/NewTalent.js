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

const NewTalent = () => {
  return (
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
              'https://images-na.ssl-images-amazon.com/images/I/81yDKKI9kUL.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Avatar
          rounded
          source={{
            uri:
              'https://amd.c.yimg.jp/amd/20200522-00629670-shincho-000-3-view.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />

        <Avatar
          rounded
          source={{
            uri: 'https://grapee.jp/wp-content/uploads/s-10473_01.jpg',
          }}
          size="large"
          onPress={() => navigation.navigate('Onboarding')}
        />

        <Avatar
          rounded
          source={{
            uri:
              'https://m.media-amazon.com/images/I/415ZP4B5ObL.CR0,0,351,351.jpg',
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

export default NewTalent;

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
});
