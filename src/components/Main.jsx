import { useGlobalContext } from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";
import styles from "./components.module.css";

export default function Main() {
  const { queryResults, functions } = useGlobalContext();
  const { currentMovies, currentSeries } = queryResults;

  return (
    <div className={`bg-light text-dark ${styles.main}`}>
      <h1 className="mb-5 p-3 text-center">
        {currentMovies.length > 0 || currentSeries.length > 0
          ? ""
          : "Nessun risultato trovato"}
      </h1>
      <h2 className="my-3 p-5">
        {currentMovies.length > 0 ? "Film trovati : " : ""}
      </h2>
      <div className={`container ${currentMovies.length > 0 ? "" : "d-none"}`}>
        <ResultSection results={currentMovies} />
      </div>
      <h2 className="my-3 p-5">
        {currentSeries.length > 0 ? "Serie TV trovate : " : ""}
      </h2>
      <div className={`container ${currentSeries.length > 0 ? "" : "d-none"}`}>
        <ResultSection results={currentSeries} />
      </div>
    </div>
  );
}
