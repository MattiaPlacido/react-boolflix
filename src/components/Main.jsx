import { useGlobalContext } from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";
import styles from "./components.module.css";

export default function Main() {
  const { queryResults, functions } = useGlobalContext();
  const { currentMovies, currentSeries } = queryResults;

  const areResultsEmpty = () =>
    currentMovies.length === 0 && currentSeries.length === 0;

  return (
    <div
      className={`bg-dark text-white ${areResultsEmpty() ? styles.main : ""}`}
    >
      <h1 className={`mb-5 ${areResultsEmpty() ? "" : "d-none"}`}>
        Nessun risultato trovato
      </h1>
      <h2 className="mb-3 p-5 text-center">
        {areResultsEmpty() ? "" : "Film Presenti"}
      </h2>
      <div className={`container ${areResultsEmpty() ? "d-none" : ""}`}>
        <ResultSection results={currentMovies} />
      </div>
      <h2 className="my-3 p-5 text-center">
        {areResultsEmpty() ? "" : "Serie TV Presenti"}
      </h2>
      <div className={`container ${areResultsEmpty() ? "d-none" : ""}`}>
        <ResultSection results={currentSeries} />
      </div>
    </div>
  );
}
