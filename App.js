import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import BarAndStack from './src/screens/BarAndStack';

// const {height} = Dimensions.get('window');

const App = () => {
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [headerTitle, setHeaderTitle] = useState('Gifted Charts');
  const [backPress, setBackPress] = useState(null);

  const renderScreen = () => {
    switch (index) {
      case 0:
        return (
          <BarAndStack
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setHeaderTitle={setHeaderTitle}
            setBackPress={setBackPress}
          />
        );
      case 1:
        return <BarAndStack setHeaderTitle={setHeaderTitle} />;
      case 0:
        return <BarAndStack setHeaderTitle={setHeaderTitle} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onBackPress={() => {
          setCurrentIndex(-1);
          setHeaderTitle('Gifted Charts');
        }}
        title={headerTitle}
      />
      <View style={styles.screen}>{renderScreen()}</View>
      <Footer index={index} setIndex={setIndex} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    marginTop: 85,
  },
});

export default App;
