import { useGlobalContext } from "../contexts/GlobalContext";

export default function Main() {
  const { currentMovies } = useGlobalContext();

  return (
    <div className="bg-light text-dark p-5">
      <h1>{currentMovies.length > 0 ? "Risultati :" : "Cerca Qualcosa!"}</h1>
      <div>
        {currentMovies}
      </div>
    </div>
  );
}
