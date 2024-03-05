import HistoricalChart from './HistoricalChart';
import { DonutChart } from './DonutChart';
import { ChartData } from './chart.model';

const portfolioData: ChartData[] = [
  {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Commodities', 'Cash'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [500, 300, 200, 100, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ]
      }
    ]
  },
  {
    labels: ['AAPL', 'MSFT', 'US Treasury', 'Corporate Bond', 'Office Buildings', 'Apartments'],
    datasets: [
      {
        label: 'Specific Asset',
        data: [100, 200, 50, 100, 300, 250],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ]
      }
    ]
  }
];

const historicalData: ChartData[] = [
  {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [500, 600, 700, 600, 900],
        borderColor: ['rgb(75, 192, 192)'],
        backgroundColor: ['rgba(75, 192, 192, 0.2)']
      }
    ]
  }
];

function App() {
  return (
    <>
      <h1>Financial Portfolio</h1>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '1' }}>
          <DonutChart data={portfolioData} />
        </div>
        <div style={{ flex: '1' }}>
          <HistoricalChart data={historicalData} />
        </div>
      </div>
    </>
  );
}

export default App;
