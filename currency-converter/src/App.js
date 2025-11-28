import { useEffect, useState } from "react";

const Key = "af20d059caf6ae8816f47030";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [base, setBase] = useState("AED");
  const [secondary, setSecondary] = useState("INR");
  const [rates, setRates] = useState(0);

  const Total = amount ? Number(amount) * rates.toFixed(2) : "";

  useEffect(
    function () {
      async function fetchCurrency() {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${Key}/latest/${base}`
        );
        const data = await res.json();
        setRates(data.conversion_rates[secondary]);
      }

      fetchCurrency();
    },
    [amount, base, secondary]
  );

  return (
    <div>
      <input
        type="number"
        min={1}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={base} onChange={(e) => setBase(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="AED">AED</option>
        <option value="EUR">EUR</option>
      </select>
      <select value={secondary} onChange={(e) => setSecondary(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="AED">AED</option>
        <option value="EUR">EUR</option>
      </select>

      <p>
        {Total}--{secondary}
      </p>
    </div>
  );
}
