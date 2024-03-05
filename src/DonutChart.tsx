import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartProps } from './chart.model';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutChart = ({ data }: ChartProps) => {
  const [viewType, setViewType] = useState<number>(0);

  const handleToggleView = () => {
    setViewType(currentViewType => (currentViewType === 0 ? 1 : 0));
  };

  return (
    <>
      <button onClick={handleToggleView}>
        {`Switch to ${viewType === 0 ? 'Specific Asset' : 'Asset Class'} View`}
      </button>
      <Doughnut data={data[viewType]} />
    </>
  );
};
