// src/components/TTable.js
import { Tooltip } from "react-tooltip";
import { tooltips } from "../utils/tooltipTexts";

function InfoIcon({ id }) {
  return (
    <>
      <span data-tooltip-id={id} style={{ cursor: "pointer", marginLeft: 5 }}>❓</span>
      <Tooltip id={id} place="top" effect="solid" />
    </>
  );
}

export default function TTable({ data }) {
  const { revenue, expenses, assets, liabilities } = data;

  return (
    <div>
      <h2>Example T-Account Table</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Account</th>
            <th>Type</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Cash <InfoIcon id="assets" />
            </td>
            <td>Asset</td>
            <td>${assets}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              Accounts Payable <InfoIcon id="liabilities" />
            </td>
            <td>Liability</td>
            <td>-</td>
            <td>${liabilities}</td>
          </tr>
          <tr>
            <td>
              Owner's Equity <InfoIcon id="currentRatio" />
            </td>
            <td>Equity</td>
            <td>-</td>
            <td>${(assets - liabilities - expenses + revenue).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Dividends</td>
            <td>Equity (Contra)</td>
            <td>${(revenue * 0.05).toFixed(2)}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              Sales Revenue <InfoIcon id="revenue" />
            </td>
            <td>Revenue</td>
            <td>-</td>
            <td>${revenue}</td>
          </tr>
          <tr>
            <td>
              Rent Expense <InfoIcon id="expenses" />
            </td>
            <td>Expense</td>
            <td>${(expenses * 0.4).toFixed(2)}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              Salaries Expense <InfoIcon id="expenses" />
            </td>
            <td>Expense</td>
            <td>${(expenses * 0.6).toFixed(2)}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
