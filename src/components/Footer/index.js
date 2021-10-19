import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../config/colors';

Icon.loadFont();

const Footer = props => {
  const {index, setIndex} = props;
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => setIndex(0)}
        name="bar-chart"
        size={index === 0 ? 32 : 26}
        color={index === 0 ? 'cyan' : 'lightgray'}
      />
      <Icon
        onPress={() => setIndex(1)}
        name="line-chart"
        size={index === 1 ? 32 : 26}
        color={index === 1 ? 'cyan' : 'lightgray'}
      />
      <Icon
        onPress={() => setIndex(2)}
        name="pie-chart"
        size={index === 2 ? 32 : 26}
        color={index === 2 ? 'cyan' : 'lightgray'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.themeRed,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});

export default Footer;
