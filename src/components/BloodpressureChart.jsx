// function BloodpressureChart({systolic,diastolic}) {


// }

// export default BloodpressureChart
import { LinearScale,CategoryScale } from 'chart.js';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BloodPressureChart = ({ systolic, diastolic }) => {
  // Prepare data for the chart
  const data = systolic.map((systolicObj, index) => ({
    day: `Day ${index + 1}`,
    systolic: systolicObj.value,
    diastolic: diastolic[index].value
  }));


  return (
   <div className='bg-purple-200 '>

    <LineChart width={600} height={300}  data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
      <XAxis dataKey="day" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="systolic" stroke="red" />
      <Line type="monotone" dataKey="diastolic" stroke="blue" />
    </LineChart>
   </div>
  );
};

export default BloodPressureChart;
