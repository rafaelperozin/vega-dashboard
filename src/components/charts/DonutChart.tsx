import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { ChartProps } from '../../models/chart.model';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutChart = ({ data }: ChartProps) => {
  const [viewType, setViewType] = useState<number>(0);

  const handleToggleView = () => {
    setViewType(currentViewType => (currentViewType === 0 ? 1 : 0));
  };

  return (
    <div className="chart--donut">
      <Doughnut data={data[viewType]} />
      <button className="button button--secondary" onClick={handleToggleView}>
        {`Switch to ${viewType === 0 ? 'Specific Asset' : 'Asset Class'} View`}
      </button>
    </div>
  );
};
