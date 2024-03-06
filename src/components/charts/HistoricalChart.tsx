import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { ChartProps } from '../../models/chart.model';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const HistoricalChart = ({ data }: ChartProps) => (
  <div>
    <Line data={data[0]} />
  </div>
);
