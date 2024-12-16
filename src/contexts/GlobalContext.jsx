import { useState, useEffect } from "react";
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
        setCurrentMovies(data);
        //DEBUGG
        console.log(currentMovies);
      })
      .catch((err) => console.error(err));
  };

  return (
    <GlobalContext.Provider value={{ queryData, currentMovies, getFilms }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
