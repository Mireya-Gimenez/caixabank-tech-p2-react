import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search/${search.toUpperCase()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Enter a currency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 w-92 text-center focus:outline-none focus:ring-3 focus:ring-blue-200"
      />
    </form>
  );
}
