import { DonutChart } from '../components/charts/DonutChart';
import { HistoricalChart } from '../components/charts/HistoricalChart';
import { historicalData, portfolioData } from '../data/mock.data';

export const HomePage = () => {
  return portfolioData?.length === 0 && historicalData?.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div className="dashboard">
      <div className="dashboard__widget widget widget--span-3">
        <h2 className="widget__title txt-l txt-bold">Historical Chart</h2>
        <HistoricalChart data={historicalData} />
      </div>
      <div className="dashboard__widget widget widget--span-1">
        <h2 className="widget__title txt-l txt-bold">Portfolio Balance Chart</h2>
        <DonutChart data={portfolioData} />
      </div>
    </div>
  );
};
