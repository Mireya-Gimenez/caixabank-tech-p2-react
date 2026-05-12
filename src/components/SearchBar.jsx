import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componente para la barra de búsqueda, que navega a la página que muestra los resultados
export default function SearchBar() {
  // Estado para guardar el texto
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    // Evitamos recargar la página
    e.preventDefault();

    if (!search.trim()) return;

    // Se navega a la página de resultados
    navigate(`/search/${search.toUpperCase()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Enter a currency and press enter"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 w-92 text-center focus:outline-none focus:ring-3 focus:ring-blue-200"
      />
    </form>
  );
}
