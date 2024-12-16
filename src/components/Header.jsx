import { useGlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  const { queryData, functions } = useGlobalContext();
  const { getFilms } = functions;
  const { queryTerm, setQueryTerm } = queryData;

  const handleInputChange = (e) => {
    setQueryTerm(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    getFilms();
  };

  return (
    <div className="bg-dark text-danger py-3 d-flex justify-content-between px-5">
      <h1> BoolFlix </h1>
      <form onSubmit={handleInputSubmit}>
        <div className="d-flex ">
          <input
            type="text"
            className="form-control"
            id="film-query-input"
            name="queryTerm"
            value={queryTerm}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-danger">
            Cerca
          </button>
        </div>
      </form>
    </div>
  );
}
