import { useGlobalContext } from "../contexts/GlobalContext";

export default function Main() {
  const { currentMovies, functions } = useGlobalContext();
  const { getFlag } = functions;

  return (
    <div className="bg-light text-dark p-5">
      <h1>{currentMovies.length > 0 ? "Risultati :" : "Cerca Qualcosa!"}</h1>
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
                  Voto medio dalla comunità : <b>{movie.vote_average}</b>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
