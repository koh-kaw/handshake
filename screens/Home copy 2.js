import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Text, Button, Accordion, Block, Input, theme} from 'galio-framework';
import {Icon} from 'react-native-vector-icons';
import {Avatar} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
});

export default Home = ({navigation}) => {
  const data = [
    {
      title: 'First Chapter',
      content: 'Lorem ipsum dolor sit amet',
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      },
    },
    {title: '2nd Chapter', content: 'Lorem ipsum dolor sit amet'},
    {title: '3rd Chapter', content: 'Lorem ipsum dolor sit amet'},
  ];

  return (
    <ScrollView horizontal={true}>
      <TouchableHighlight>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Avatar rounded title="MD" />
      </TouchableHighlight>
      <TouchableHighlight>
        <Text color="white" size={60}>
          メニュー2
        </Text>
      </TouchableHighlight>
    </ScrollView>
  );
};
