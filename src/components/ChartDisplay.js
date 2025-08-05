import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

export default function ChartDisplay({ metrics }) {
  const data = {
    labels: ["Current Ratio", "Debt-to-Equity", "Gross Margin"],
    datasets: [
      {
        label: "Ratios",
        data: [
          metrics.currentRatio,
          metrics.debtToEquity,
          metrics.grossMargin * 100,
        ],
        backgroundColor: ["#4CAF50", "#F44336", "#2196F3"],
      },
    ],
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <h3>Financial Metrics</h3>
      <Bar data={data} />
    </div>
  );
}
