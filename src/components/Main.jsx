import { useGlobalContext } from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";
import styles from "./components.module.css";
import GenreFilter from "./GenreFilter";

export default function Main() {
  const { queryResults, functions } = useGlobalContext();
  const { currentMovies, currentSeries, serieGenres, movieGenres } =
    queryResults;
  const { loading } = functions;

  const areResultsEmpty = () =>
    currentMovies.length === 0 && currentSeries.length === 0;

  if (loading) {
    return (
      <div className={`bg-dark text-white text-center ${styles.main}`}>
        <p>Caricamento in corso...</p>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white">
      <div className="py-5 container">
        <h2 className="text-center">Generi popolari tra i film</h2>
        <div className="">
          <GenreFilter genreList={movieGenres} />
        </div>
      </div>
      <div className="py-5 container">
        <h2 className="text-center">Generi popolari tra le serie</h2>
        <div className="">
          <GenreFilter genreList={serieGenres} />
        </div>
      </div>
      <div className={`${areResultsEmpty() ? styles.main : ""}`}>
        <h2 className="mb-3 p-5 text-center">
          {areResultsEmpty() ? "" : "Film Presenti"}
        </h2>
        <div className={`container ${areResultsEmpty() ? "d-none" : ""}`}>
          <ResultSection type="f" results={currentMovies} />
        </div>
        <h2 className="my-3 p-5 text-center">
          {areResultsEmpty() ? "" : "Serie TV Presenti"}
        </h2>
        <div className={`container ${areResultsEmpty() ? "d-none" : ""}`}>
          <ResultSection type="s" results={currentSeries} />
        </div>
      </div>
    </div>
  );
}
