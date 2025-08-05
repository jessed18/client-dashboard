import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { tooltips } from "../utils/tooltipTexts";

function InfoIcon({ id }) {
  return (
    <>
      <span
        data-tooltip-id={id}
        data-tooltip-content={tooltips[id]}
        style={{
          cursor: "pointer",
          marginLeft: 5,
          display: "inline-block",
          backgroundColor: "#e0e0e0",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
          textAlign: "center",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "bold",
          color: "#333"
        }}
      >
        ?
      </span>
      <Tooltip id={id} place="top" effect="solid" />
    </>
  );
}

export default function FinancialForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    revenue: "",
    expenses: "",
    assets: "",
    liabilities: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      ...formData,
      revenue: parseFloat(formData.revenue),
      expenses: parseFloat(formData.expenses),
      assets: parseFloat(formData.assets),
      liabilities: parseFloat(formData.liabilities),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Financial Data</h2>
      {["revenue", "expenses", "assets", "liabilities"].map((field) => (
        <div key={field} style={{ marginBottom: "1rem" }}>
          <label htmlFor={field}>
            {field[0].toUpperCase() + field.slice(1)} <InfoIcon id={field} />
          </label>
          <br />
          <input
            type="number"
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleChange}
            required
            style={{ padding: "6px", width: "200px", marginTop: "4px" }}
          />
        </div>
      ))}
      <button type="submit" style={{ padding: "8px 16px" }}>
        Calculate
      </button>
    </form>
  );
}
