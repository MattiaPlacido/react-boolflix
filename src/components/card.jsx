import { useGlobalContext } from "../contexts/GlobalContext";
import styles from "./components.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const { functions } = useGlobalContext();
  const { getFlag } = functions;

  const starNumber = Math.ceil(props.score / 2);
  const stars = [];

  for (let i = 0; i < starNumber; i++) {
    stars.push(<FontAwesomeIcon icon={faStarSolid} />);
  }
  for (let i = starNumber; i < 5; i++) {
    stars.push(<FontAwesomeIcon icon={faStarRegular} />);
  }

  const genreList = props.genre_ids;

  return (
    <div className={`card-container ${styles.card_container}`}>
      <div className={`card ${styles.card}`} key={props.id}>
        <img
          src={
            props.image ? `https://image.tmdb.org/t/p/w342${props.image}` : ""
          }
          className={`card-img-top ${props.image ? styles.card_img : "d-none"}`}
          alt={props.title}
        />
        <div
          className={`card-body bg-black text-white ${
            props.image ? styles.card_body : ""
          }`}
        >
          <div className="card-info">
            <h5 className="card-title">{props.title}</h5>
            <h5
              className={`card-title ${
                props.originalTitle == props.title ? "d-none" : ""
              }`}
            >
              {props.originalTitle}
            </h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">Voto : {stars}</p>
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
