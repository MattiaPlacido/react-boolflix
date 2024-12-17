import { useGlobalContext } from "../contexts/GlobalContext";
import styles from "./components.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Card(props) {
  const { functions } = useGlobalContext();
  const { getFlag, getCastById, getGenreNameById } = functions;
  const { type, id, genreIds } = props;

  const [actorList, setActorList] = useState("");
  const [genreList, setGenreList] = useState("Non disponibile");

  const starNumber = Math.ceil(props.score / 2);
  const stars = [];

  for (let i = 0; i < starNumber; i++) {
    stars.push(<FontAwesomeIcon icon={faStarSolid} />);
  }
  for (let i = starNumber; i < 5; i++) {
    stars.push(<FontAwesomeIcon icon={faStarRegular} />);
  }

  const mergeCastList = async () => {
    const nameList = [];
    const cast = await getCastById(id, type);

    if (cast.length > 0) {
      for (let i = 0; i < 5; i++) {
        nameList.push(cast[i].name);
      }

      setActorList(nameList.join(", ") + " , ...");
    } else {
      setActorList(" non disponibile");
    }
  };

  const mergeGenreList = () => {
    if (genreIds.length > 0) {
      const nameList = genreIds.map((genreId) => getGenreNameById(genreId));
      setGenreList(nameList.join(", "));
    } else {
      setGenreList("Lista generi non disponibile");
    }
  };

  useEffect(() => {
    if (id) {
      mergeCastList();
      mergeGenreList();
    }
  }, [id]);

  return (
    <div className={`card-container ${styles.card_container}`}>
      <div className={`card ${styles.card}`} key={id}>
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
            <p className="card-text">
              Generi : <b>{genreList}</b>.
            </p>
            <p className="card-text">
              Cast : <b>{actorList}</b>
            </p>
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
