import { useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [queryTerm, setQueryTerm] = useState("");
  const queryData = { queryTerm, setQueryTerm };

  const [currentMovies, setCurrentMovies] = useState([]);

  //Dettagli chiamata api
  const url = `https://api.themoviedb.org/3/search/movie?query=${queryTerm}&include_adult=false&language=it&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk0MTExM2Q3MzMwMGY2MjFiNjE0MTA4M2MwYjllYSIsIm5iZiI6MTczNDM0MTc2OS4zNzMsInN1YiI6IjY3NWZmNDg5ZGU4ZjM0ZTBiMjU4YTg5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpD3y81sMTb92knz_gprqhORSRY13XLmPypW7t1TjkY",
    },
  };

  const getFilms = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setCurrentMovies(data.results || []);
        //DEBUGG
        console.log(currentMovies);
      })
      .catch((err) => console.error(err));
  };

  const getFlag = (language) => {
    switch (language) {
      case "it":
        return "https://flagsapi.com/IT/shiny/32.png";
      case "en":
        return "https://flagsapi.com/US/shiny/32.png";
      //da aggiungere altri casi, non l'ho fatto perchè realisticamente in questo programma sono questi quelli gestiti
      default:
        return "Lingua non trovata";
    }

    return <img src={``} />;
  };

  const functions = {
    getFlag,
    getFilms,
  };

  return (
    <GlobalContext.Provider value={{ queryData, currentMovies, functions }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
