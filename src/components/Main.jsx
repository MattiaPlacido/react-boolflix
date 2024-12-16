import { useGlobalContext } from "../contexts/GlobalContext";

export default function Main() {
  const { queryResults, functions } = useGlobalContext();
  const { getFlag } = functions;
  const { currentMovies, currentSeries } = queryResults;

  return (
    <div className="bg-light text-dark p-5">
      <h1 className="mb-5">
        {currentMovies.length > 0 || currentSeries.length > 0
          ? "Risultati :"
          : "Cerca Qualcosa!"}
      </h1>
      <h2 className="my-3">
        {currentMovies.length > 0 ? "Film trovati : " : "Nessun film trovato"}
      </h2>
      <div className={`container ${currentMovies.length > 0 ? "" : "d-none"}`}>
        <ul>
          {currentMovies.map((movie) => {
            return (
              <li className="mb-3" key={movie.id}>
                <p>
                  Titolo : <b>{movie.title}</b>
                  <br />
                  Titolo originale : <b>{movie.original_title} </b>
                  <br />
                  Lingua originale : &nbsp;
                  <img
                    src={getFlag(movie.original_language)}
                    alt={movie.original_language}
                  />
                  <br />
                  Voto medio dalla comunità :{" "}
                  <b>{movie.vote_average.toFixed(1)}</b>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <h2 className="my-3">
        {currentSeries.length > 0
          ? "Serie TV trovate : "
          : "Nessuna serie trovata"}
      </h2>
      <div className={`container ${currentSeries.length > 0 ? "" : "d-none"}`}>
        <ul>
          {currentSeries.map((serie) => {
            return (
              <li className="mb-3" key={serie.id}>
                <p>
                  Titolo : <b>{serie.name}</b>
                  <br />
                  Titolo originale : <b>{serie.original_name} </b>
                  <br />
                  Lingua originale : &nbsp;
                  <img
                    src={getFlag(serie.original_language)}
                    alt={serie.original_language}
                  />
                  <br />
                  Voto medio dalla comunità :{" "}
                  <b>{serie.vote_average.toFixed(1)}</b>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
