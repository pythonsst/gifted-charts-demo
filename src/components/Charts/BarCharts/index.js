import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const BarCharts = () => {
  const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
  return <BarChart frontColor={'#177AD5'} barWidth={22} data={barData} />;
};

export default BarCharts;
