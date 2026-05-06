export default function RatesList({ rates }) {
  return (
    <ul className="px-3">
      {Object.entries(rates).map(([currency, value]) => (
        <li key={currency} className="py-1.5">
          {currency}: {value}
        </li>
      ))}
    </ul>
  );
}
