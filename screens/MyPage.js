import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Animated,
  View,
} from 'react-native';
import {Block, theme, Card, Text} from 'galio-framework';
import {Avatar} from 'react-native-elements';

export default function MyPage() {
  return (
    <Block flex style={styles.profile}>
      <Block flex style={styles.avator}>
        <Avatar
          rounded
          source={{
            uri:
              'https://img1.girl-secret.com/wp-content/uploads/2017/06/4cda66bc31061f0cc2e84776b6e79492.jpg',
          }}
          size="large"
        />
        <Text h5>ニックネーム</Text>
        <Text h5>フォロー中</Text>
        <Text h5>参加予定イベント</Text>
        <Text h5>過去に参加したイベント</Text>
        <Text h5>お気に入り（参加したいなと思ってるイベントとか）</Text>
        <Text h5>メッセージ（タレントからのメッセージ）</Text>
      </Block>
      <Block flex style={styles.menu}>
        <Block card>
          <Text h5 style={{color: 'red'}}>
            メニュー
          </Text>
          <Text h5 style={{color: 'red'}}>
            設定
          </Text>
        </Block>
        <Block card>
          <Text h5 style={{color: 'red'}}>
            1on1延長チケット購入
          </Text>
        </Block>
        <Block card>
          <Text h5 style={{color: 'red'}}>
            チップポイント購入
          </Text>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'white',
  },
  avator: {
    backgroundColor: 'white',
  },
  menu: {
    backgroundColor: 'black',
  },
});
