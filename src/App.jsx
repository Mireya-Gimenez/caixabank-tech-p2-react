import { Routes, Route } from "react-router-dom";
import RatesList from "./components/RatesList";
import CurrencyDetail from "./components/CurrencyDetail";
import "./index.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

export function App() {
  // Variable para guardar la key de la API
  const API_KEY = "81610d2914fc4145a8fdce4ded83f8e5";
  const [rates, setRates] = useState({});

  useEffect(() => {
    // Llamamos a la API de manera asíncrona
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <RatesList rates={rates} />{" "}
              </>
            }
          />
          <Route
            path="/currency/:code"
            element={<CurrencyDetail rates={rates} />}
          />
          <Route
            path="/search/:query"
            element={<SearchResults rates={rates} />}
          />
        </Routes>
      </section>
    </main>
  );
}

export default App;
