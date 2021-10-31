import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import LineCharts from '../../components/Charts/Line/LineCharts';
import StyledLineCharts from '../../components/Charts/Line/StyledLineCharts';
import LabelledLineCharts from '../../components/Charts/Line/LabelledLineCharts';
import CurvedLineCharts from '../../components/Charts/Line/CurvedLineCharts';
import AnimatedLineCharts from '../../components/Charts/Line/AnimatedLineCharts';
import MultipleLineCharts from '../../components/Charts/Line/MultipleLineCharts';

const LineAndArea = props => {
  const {setHeaderTitle, setBackPress, currentIndex, setCurrentIndex} = props;

  const data = [
    {name: 'Minimal Line Charts'},
    {name: 'Styled Line Charts'},
    {name: 'Curved Line Charts'},
    {name: 'Labelled Line Charts'},
    {name: 'Animated Line Charts'},
    {name: 'Multiple Line Charts'},
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
        return <LineCharts />;
      case 1:
        return <StyledLineCharts />;
      case 2:
        return <CurvedLineCharts />;
      case 3:
        return <LabelledLineCharts />;
      case 4:
        return <AnimatedLineCharts />;
      case 5:
        return <MultipleLineCharts />;
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

export default LineAndArea;
