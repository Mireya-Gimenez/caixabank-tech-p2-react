import { Link, useParams } from "react-router-dom";
import RatesList from "./RatesList";

// Componente que muestra la pagina de resultados según lo buscado en la barra
export default function SearchResults({ rates }) {
  // Obtenemos el parametro de la URL
  const { query } = useParams();

  // Se convierte el objeto rates en un array y después se filtra
  // para ver que coincida con la búsqueda
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
