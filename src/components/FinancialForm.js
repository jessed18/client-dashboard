import { useState } from "react";

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
        <div key={field}>
          <label>{field[0].toUpperCase() + field.slice(1)}: </label>
          <input
            type="number"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Calculate</button>
    </form>
  );
}
