import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Chart = ({data}) => {
  console.log(data);
    return (
        <div>
           <LineChart
           width={500}
           height={500}
           data={data}
           margin={{
            top: 100,
            right: 30,
            left: 20,
           
          }}
           >
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="white" dataKey="name" />
          <YAxis stroke="white" />
          <Tooltip />
          <Legend />
            <Line dataKey="price" stroke="rgb(168, 145, 231)" activeDot={{ r: 8 }}></Line>
           </LineChart>
        </div>
    );
};

export default Chart;