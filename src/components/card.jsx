import { useGlobalContext } from "../contexts/GlobalContext";

export default function Card(props) {
  const { functions } = useGlobalContext();
  const { getFlag } = functions;

  return (
    <div className="card-container">
      <div className="card">
        <img
          src={
            props.image
              ? `https://image.tmdb.org/t/p/w342${props.image}`
              : "https://via.placeholder.com/342/771796"
          }
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <div className="card-info">
            <h5 className="card-title fs-4">{props.title}</h5>
            <h5 className="card-title fs-4">{props.originalTitle}</h5>
            <p className="card-text fs-6">{props.description}</p>
            <p className="card-text">
              Voto medio della comunità : <b>{props.score}</b>
            </p>
            Lingua originale : &nbsp;
            <img
              src={getFlag(props.originalLanguage)}
              alt={props.originalLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
