export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string[];
    backgroundColor?: string[];
  }[];
}

export interface ChartProps {
  data: ChartData[];
}
