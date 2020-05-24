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

const Reccomend = ({onPress}) => {
  //export default function Ranking(props) {
  //const {navigation} = props;
  return (
    //<Block center space="between" style={(styles.horizon, {zIndex: 2})}>
    <Block shadow style={styles.rankingCard}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.horizon}>
        <Card
          //borderless
          style={styles.card}
          title="佐野ひなこ"
          titleColor={theme.COLORS.BLACK}
          caption="最強愛されボディ"
          //location="Los Angeles, CA"
          //avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.imageStyle}
          imageBlockStyle={styles.imageBlockStyle}
          footerStyle={styles.cardFooter}
          image="https://images-na.ssl-images-amazon.com/images/I/81yDKKI9kUL.jpg"
          onPress={onPress}
        />
        <Card
          //borderless
          style={styles.card}
          title="Christopher Moon"
          titleColor={theme.COLORS.BLACK}
          caption="139 minutes ago"
          //location="Los Angeles, CA"
          //avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.imageStyle}
          //imageBlockStyle={{padding: theme.SIZES.BASE / 2}}
          footerStyle={styles.cardFooter}
          image="https://img1.girl-secret.com/wp-content/uploads/2017/06/6071e39f7c18b7eeb557147231d1795b.jpg"
          onPress={onPress}
        />
        <Card
          //borderless
          style={styles.card}
          title="Christopher Moon"
          titleColor={theme.COLORS.PRIMARY}
          caption="139 minutes ago"
          //location="Los Angeles, CA"
          //avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.imageStyle}
          //imageBlockStyle={{padding: theme.SIZES.BASE / 2}}
          footerStyle={styles.cardFooter}
          image="https://m.media-amazon.com/images/I/415ZP4B5ObL.CR0,0,351,351.jpg"
          onPress={onPress}
        />
      </ScrollView>
    </Block>
    //</Block>
  );
};

export default Reccomend;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  card: {
    width: theme.SIZES.CARD_AVATAR_WIDTH * 4,
    //height: theme.SIZES.CARD_AVATAR_HEIGHT * 5,
    height: 200,
    backgroundColor: theme.COLORS.WHITE,
  },
  imageStyle: {
    marginHorizontal: 30,
    marginVertical: 30,
    //marginHorizontal: 35,
    borderRadius: 100,
    //borderRadius: theme.SIZES.CARD_AVATAR_RADIUS,
    width: 100,
    height: 100,
    //height: theme.SIZES.CARD_IMAGE_HEIGHT,
  },
  imageBlockStyle: {
    //width: theme.SIZES.CARD_AVATAR_WIDTH,
    //height: theme.SIZES.CARD_AVATAR_HEIGHT,
    //height: 50,
    //paddingTop: 50,
    //paddingBottom: 30,
  },
  cardFooter: {
    backgroundColor: theme.COLORS.WHITE,
    //height: -70,
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
