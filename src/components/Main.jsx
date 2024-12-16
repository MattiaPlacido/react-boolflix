import { useGlobalContext } from "../contexts/GlobalContext";

export default function Main() {
  const { currentMovies } = useGlobalContext();

  return (
    <div className="bg-light text-dark p-5">
      <h1>{currentMovies.length > 0 ? "Risultati :" : "Cerca Qualcosa!"}</h1>
      <div className={`container ${currentMovies.length > 0 ? "" : "d-none"}`}>
        <ul>
          {currentMovies.map((movie) => {
            return (
              <li className="mb-3">
                Titolo : <b>{movie.title}</b>
                <br />
                Titolo originale : <b>{movie.original_title}</b>
                <br />
                Lingua originale : <b>{movie.original_language}</b>
                <br />
                Voto medio dalla comunità : <b>{movie.vote_average}</b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
