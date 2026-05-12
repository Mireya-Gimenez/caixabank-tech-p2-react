import { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Función para mostrar el detalle de las monedas, así como un pequeño conversor
export default function CurrencyDetail({ rates }) {
  // Obtenemos el párametro de la moneda concreta, sacado de la URL
  const { code } = useParams();

  // Estado para el valor que el usuario quiere convertir, que por defecto es 1
  const [amount, setAmount] = useState(1);

  // Calculo del valor en la moneda seleccionada, segun el input introducido
  const value = rates[code];
  const result = amount * value;

  return (
    <div className="p-1 text-center">
      <h1 className="text-3xl font-bold mt-4">{code}</h1>
      <div className="flex items-center gap-2 mt-4 mb-4 justify-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded w-14 text-center tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <span className="translate-y-center font-semibold">USD</span>
        <span>=</span>
        <span className="font-semibold">
          {result.toFixed(2)} {code}
        </span>
      </div>

      <Link to="/" className="text-blue-950 hover:underline underline-offset-5">
        &larr; Go Back
      </Link>
    </div>
  );
}
