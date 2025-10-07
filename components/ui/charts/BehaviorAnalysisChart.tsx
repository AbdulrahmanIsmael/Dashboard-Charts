'use client';
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  SectorProps,
  Sector,
  Cell,
} from 'recharts';

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: { name?: string | number; [key: string]: unknown };
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> &
  Partial<SectorProps> &
  PieSectorData;

export default function BehaviorAnalysisChart({
  data,
}: {
  data: { name: string; behaviorAnalysis: number; fill: string }[];
}) {
  const renderActiveShape = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
  }: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * (midAngle ?? 1));
    const cos = Math.cos(-RADIAN * (midAngle ?? 1));
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 15) * cos;
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 15) * sin;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <foreignObject x={mx - 15} y={my - 12} width={40} height={26}>
          <div className="bg-[#BABABA94] rounded px-1 text-xs text-center font-medium">
            {value}%
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="flex items-center justify-center gap-6 w-full h-full">
      <div className="w-[60%] h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeShape={renderActiveShape}
              data={data}
              dataKey="behaviorAnalysis"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={65}
              fill="#8884d8"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="font-medium text-gray-700">{entry.name}</span>
            <span className="text-gray-500">({entry.behaviorAnalysis}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
