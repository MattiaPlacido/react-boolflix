import { useGlobalContext } from "../contexts/GlobalContext";
import styles from "./components.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const { functions } = useGlobalContext();
  const { getFlag } = functions;

  const starNumber = Math.floor(props.score / 2);
  const stars = [];
  for (let i = 0; i < starNumber; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return (
    <div className={`card-container ${styles.card_container}`}>
      <div className={`card ${styles.card}`} key={props.id}>
        <img
          src={
            props.image
              ? `https://image.tmdb.org/t/p/w342${props.image}`
              : "https://via.placeholder.com/342/771796"
          }
          className={`card-img-top ${styles.card_img}`}
          alt={props.title}
        />
        <div className={`card-body ${styles.card_body}`}>
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
