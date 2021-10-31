import React from 'react';
import {LineChart} from 'react-native-gifted-charts';

const StyledLineCharts = () => {
  const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
  return (
    <LineChart
      data={lineData}
      color={'#177AD5'}
      thickness={3}
      dataPointsColor={'red'}
    />
  );
};
export default StyledLineCharts;
