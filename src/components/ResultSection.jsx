import Card from "./card";
export default function ResultSection(props) {
  const { results, type } = props;

  return (
    <div className="row">
      {results.map((result) => {
        return (
          <div className="col-3 d-flex mb-5">
            <Card
              id={result.id}
              title={result.title || result.name}
              originalTitle={result.original_title || result.original_name}
              originalLanguage={result.original_language}
              score={result.vote_average.toFixed(1)}
              image={result.poster_path}
              description={result.overview}
              type={type}
              genreIds={result.genre_ids}
            />
          </div>
        );
      })}
    </div>
  );
}
