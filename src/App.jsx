import RatesList from "./components/RatesList";
import "./index.css";
import { useEffect, useState } from "react";

export function App() {
  // Variable con la Key de la API
  const API_KEY = "81610d2914fc4145a8fdce4ded83f8e5";
  const [rates, setRates] = useState({});

  useEffect(() => {
    // Llamada a la API
    async function fetchRates() {
      const response = await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`,
      );
      const data = await response.json();
      setRates(data.rates);
    }
    fetchRates();
  }, []);

  return (
    <main className="p-3">
      <h1 className="p-2 font-bold font-mono text-3xl">
        Currency Exchange Rates
      </h1>
      <RatesList rates={rates} />
    </main>
  );
}

export default App;
