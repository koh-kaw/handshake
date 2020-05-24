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

export default function Home(props) {
  const {navigation} = props;

  return (
    <Block flex style={styles.container}>
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
      <Block center space="between" style={(styles.horizon, {zIndex: 2})}>
        <ScrollView
          //showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.views}>
          <Block shadow safe>
            <SearchBar
              placeholder="タレントを探す"
              lightTheme
              round></SearchBar>
          </Block>
          <Block space="around" shadow flex card style={styles.rankingCard}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.horizon}>
              <Avatar
                rounded
                showAccessory={true}
                accessory={{name: 'crown', type: 'font-awesome-5'}}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/1248480135340150785/W28cMDRi_400x400.jpg',
                }}
                size="large"
                onPress={() => navigation.navigate('Onboarding')}
              />
              <Avatar
                rounded
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/1192856511745118208/mlM2dOZn_400x400.jpg',
                }}
                size="large"
                onPress={() => navigation.navigate('Onboarding')}
              />

              <Avatar
                rounded
                source={{
                  uri:
                    'https://blogimg.goo.ne.jp/user_image/63/90/697ade91513890a10e25bfb675f11b4e.jpg',
                }}
                size="large"
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
          <Text h5 size={16} bold>
            注目の新着タレント
          </Text>
          <Card
            flex
            borderless
            style={styles.card}
            title="Christopher Moon"
            caption="139 minutes ago"
            location="Los Angeles, CA"
            avatar="http://i.pravatar.cc/100?id=skater"
            imageStyle={styles.cardImageRadius}
            imageBlockStyle={{padding: theme.SIZES.BASE / 2}}
            image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
          />
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  rankingCard: {
    paddingHorizontal: 5,
    backgroundColor: 'white',
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
