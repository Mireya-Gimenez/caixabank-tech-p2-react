import { Link, useNavigate, useParams } from "react-router-dom";
import RatesList from "./RatesList";

export default function SearchResults({ rates }) {
  const { query } = useParams();
  const navigate = useNavigate();

  const filteredRates = Object.fromEntries(
    Object.entries(rates).filter(([currency]) =>
      currency.includes(query.toUpperCase()),
    ),
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">
        Results for: <span className="font-normal">{query}</span>
      </h2>

      <RatesList rates={filteredRates} />
      <Link
        to="/"
        className="text-blue-950 hover:underline underline-offset-5 block text-center mt-2"
      >
        &larr; Go Back
      </Link>
    </div>
  );
}
