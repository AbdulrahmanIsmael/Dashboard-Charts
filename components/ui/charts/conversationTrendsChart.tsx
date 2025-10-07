'use client';
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import CustomTooltip from './customTooltip';

type dataType = {
  name: string;
  customersValue: number;
  leadsValue: number;
  tokenConsumption?: number;
};

export default function ConversationTrendsChart({
  data,
}: {
  data: dataType[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barGap={1}
        margin={{ top: 10, right: 0, left: -30, bottom: -10 }}
      >
        <XAxis
          dataKey="name"
          fontSize="8.30px"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          fontSize="8.30px"
          axisLine={false}
          tickLine={false}
          domain={[0, 400]}
        />
        <Bar
          dataKey="customersValue"
          fill="#1B59F8CC"
          barSize={8}
          background={{ fill: '#F2F7FF', radius: 4 }}
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="leadsValue"
          fill="#56cc9d"
          barSize={8}
          background={{ fill: '#F2F7FF', radius: 4 }}
          radius={[4, 4, 0, 0]}
        />
        <Tooltip
          cursor={false}
          content={<CustomTooltip />}
          position={{ y: 0 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
