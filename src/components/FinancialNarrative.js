// src/components/FinancialNarrative.js
export default function FinancialNarrative({ data }) {
  const { revenue, expenses, assets, liabilities } = data;

  const currentRatio = assets / liabilities;
  const debtToEquity = liabilities / (assets - liabilities);
  const grossMargin = (revenue - expenses) / revenue;

  let story = "";

  if (grossMargin > 0.5) {
    story += "Your business is generating strong profits compared to expenses ❓. ";
  } else if (grossMargin > 0.3) {
    story += "Your margins are decent, but there’s room to improve profitability. ";
  } else {
    story += "Your expenses are eating into your revenue — it might be time to trim costs or boost pricing. ";
  }

  if (currentRatio > 2) {
    story += "You have more than enough assets to cover your liabilities ❓, which means you're in a strong liquidity position. ";
  } else if (currentRatio > 1) {
    story += "You can cover your short-term obligations, but keep an eye on cash flow. ";
  } else {
    story += "Your liabilities are outweighing your assets — consider improving collections or cutting back on short-term debt. ";
  }

  if (debtToEquity < 1) {
    story += "You're using more of your own equity than debt ❓ — a healthy sign of sustainability. ";
  } else if (debtToEquity < 2) {
    story += "You're somewhat leveraged — not a problem if you're investing in growth. ";
  } else {
    story += "Your business is highly leveraged. Be cautious about taking on more debt without increasing equity or profits. ";
  }

  if (revenue < 10000) {
    story += "Compared to other small businesses, your revenue is on the lower side — consider marketing or pricing strategies to grow.";
  } else if (revenue > 50000) {
    story += "You're outperforming many peers in revenue — now focus on optimizing operations to sustain growth.";
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Your Financial Story</h2>
      <p style={{ lineHeight: 1.6 }}>{story}</p>
    </div>
  );
}
