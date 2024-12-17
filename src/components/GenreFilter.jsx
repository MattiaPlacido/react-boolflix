import { useGlobalContext } from "../contexts/GlobalContext";

export default function GenreFilter({ genreList }) {
  const { functions } = useGlobalContext();
  const { getContentByGenre } = functions;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {genreList.map((genre) => {
        return (
          <span
            className="badge text-white bg-black border-white px-3 py-2 fs-5 m-2
"
            key={genre.id}
            onClick={() => getContentByGenre(genre.id)}
            role="button"
          >
            {genre.name}
          </span>
        );
      })}
    </div>
  );
}
