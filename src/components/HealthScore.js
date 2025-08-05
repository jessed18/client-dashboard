export function calculateMetrics({ revenue, expenses, assets, liabilities }) {
  const currentRatio = assets / liabilities;
  const debtToEquity = liabilities / (assets - liabilities);
  const grossMargin = (revenue - expenses) / revenue;

  let score = 0;
  if (currentRatio > 1.5) score += 30;
  if (debtToEquity < 1) score += 30;
  if (grossMargin > 0.3) score += 40;

  return { currentRatio, debtToEquity, grossMargin, score };
}

export default function HealthScore({ data }) {
  const { currentRatio, debtToEquity, grossMargin, score } = calculateMetrics(data);

  return (
    <div>
      <h2>Financial Health Score: {score}/100</h2>
      <ul>
        <li>Current Ratio: {currentRatio.toFixed(2)}</li>
        <li>Debt-to-Equity: {debtToEquity.toFixed(2)}</li>
        <li>Gross Margin: {(grossMargin * 100).toFixed(1)}%</li>
      </ul>
    </div>
  );
}
