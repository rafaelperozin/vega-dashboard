import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import { ChartProps } from './chart.model';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const HistoricalChart = ({ data }: ChartProps) => (
  <div>
    <Line data={data[0]} />
  </div>
);

export default HistoricalChart;
