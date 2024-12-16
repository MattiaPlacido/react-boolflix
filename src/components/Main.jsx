import { useGlobalContext } from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";

export default function Main() {
  const { queryResults, functions } = useGlobalContext();
  const { currentMovies, currentSeries } = queryResults;

  return (
    <div className="bg-light text-dark">
      <h1 className="mb-5 p-5">
        {currentMovies.length > 0 || currentSeries.length > 0
          ? "Risultati :"
          : "Cerca Qualcosa!"}
      </h1>
      <h2 className="my-3 p-5">
        {currentMovies.length > 0 ? "Film trovati : " : "Nessun film trovato"}
      </h2>
      <div className={`container ${currentMovies.length > 0 ? "" : "d-none"}`}>
        <ResultSection results={currentMovies} />
      </div>
      <h2 className="my-3 p-5">
        {currentSeries.length > 0
          ? "Serie TV trovate : "
          : "Nessuna serie trovata"}
      </h2>
      <div className={`container ${currentSeries.length > 0 ? "" : "d-none"}`}>
        <ResultSection results={currentSeries} />
      </div>
    </div>
  );
}
