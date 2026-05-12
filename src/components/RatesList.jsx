import { Link } from "react-router-dom";

export default function RatesList({ rates }) {
  return (
    <ul className="px-2 py-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.entries(rates).map(([currency, value]) => (
        <Link key={currency} to={`/currency/${currency}`}>
          <li
            key={currency}
            className="py-4 px-6 rounded-lg shadow-md border bg-white hover:bg-gray-200 transition"
          >
            <h2 className="font-bold text-lg">{currency}</h2>
            <p className="text-gray-600 font-semibold">{value}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
