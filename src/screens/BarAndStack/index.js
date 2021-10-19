import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import BarCharts from '../../components/Charts/BarCharts';
import HorizontalBars from '../../components/Charts/HorizontalBarCharts';
import StackedBars from '../../components/Charts/StackedBarCharts';
import CappedBarCharts from '../../components/Charts/CappedBarCharts';
import GroupedBars from '../../components/Charts/GroupedBars';
import AnimatedBars from '../../components/Charts/AnimatedBars';

const BarAndStack = props => {
  const {setHeaderTitle, setBackPress, currentIndex, setCurrentIndex} = props;

  const data = [
    {name: 'Bar Charts'},
    {name: 'Stacked Bar Charts'},
    {name: 'Horizontal Bar Charts'},
    {name: 'Animated Bar Charts'},
    {name: 'Capped Bar Charts'},
    {name: 'Grouped Bar Charts'},
  ];

  console.log('called');

  const onItemPress = index => {
    setCurrentIndex(index);
    setHeaderTitle(data[index].name);
  };

  const renderList = ({item, index}) => {
    console.log('item', item);
    return (
      <TouchableOpacity onPress={() => onItemPress(index)} style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderChart = () => {
    switch (currentIndex) {
      case 0:
        return <BarCharts />;
      case 1:
        return <StackedBars />;
      case 2:
        return <HorizontalBars />;
      case 3:
        return <AnimatedBars />;
      case 4:
        return <CappedBarCharts />;
      case 5:
        return <GroupedBars />;
    }
  };

  return (
    <View style={styles.container}>
      {currentIndex === -1 ? (
        <FlatList data={data} renderItem={renderList} />
      ) : (
        renderChart()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  item: {
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemText: {
    //   color:''
  },
});

export default BarAndStack;
