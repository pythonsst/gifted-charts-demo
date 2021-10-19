import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../config/colors';

Icon.loadFont();

const Header = props => {
  const {title, onBackPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        {true ? (
          <Icon
            onPress={onBackPress}
            name="arrow-left"
            size={22}
            color="white"
            style={{marginRight: 10}}
          />
        ) : null}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.themeRed,
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Header;
