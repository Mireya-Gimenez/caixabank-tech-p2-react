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
    <main>
      <nav className="p-5 mb-6 bg-blue-950 text-white uppercase">
        <h1 className="py-4 font-bold font-sans tracking-wider text-4xl text-center">
          Currency Exchange Rates
        </h1>
      </nav>
      <section className="w-4/5 mx-auto">
        <RatesList rates={rates} />
      </section>
    </main>
  );
}

export default App;
