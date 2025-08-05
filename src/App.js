import { useState } from "react";
import FinancialForm from "./components/FinancialForm";
import HealthScore, { calculateMetrics } from "./components/HealthScore";
import ChartDisplay from "./components/ChartDisplay";
import TTable from "./components/TTable";
import FinancialNarrative from "./components/FinancialNarrative";

export default function App() {
  const [financialData, setFinancialData] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Client Financial Health Dashboard</h1>
      
      <FinancialForm onSubmit={setFinancialData} />

      {financialData && (
        <>
          <hr style={{ margin: "2rem 0" }} />

          <HealthScore data={financialData} />
          <ChartDisplay metrics={calculateMetrics(financialData)} />
          <TTable data={financialData} />
          <FinancialNarrative data={financialData} />
        </>
      )}
    </div>
  );
}
