import "./index.css";
import { useEffect } from "react";

export function App() {
  // Variable con la Key de la API
  const API_KEY = "81610d2914fc4145a8fdce4ded83f8e5";

  useEffect(() => {
    // Llamada a la API
    async function fetchRates() {
      const response = await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`,
      );
      const data = await response.json();
      console.log(data);
    }
    fetchRates();
  }, []);

  return (
    <main className="p-3">
      <h1 className="p-2 font-bold font-mono text-3xl">Pruebas</h1>
    </main>
  );
}

export default App;
