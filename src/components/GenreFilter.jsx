export default function GenreFilter({ genreList }) {
  return (
    <div className="d-flex">
      {genreList.map((genre) => {
        return (
          <span className="badge text-white bg-black border-white">New</span>
        );
      })}
    </div>
  );
}
