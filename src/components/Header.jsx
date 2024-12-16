import { useGlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  const { queryData, functions } = useGlobalContext();
  const { getFilms, getSeries } = functions;
  const { queryTerm, setQueryTerm } = queryData;

  const handleInputChange = (e) => {
    setQueryTerm(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    getFilms();
    getSeries();
  };

  return (
    <div className="bg-dark py-3 d-flex justify-content-between px-5">
      <a href="" className="text-decoration-none text-danger h1">
        BoolFlix
      </a>
      <form onSubmit={handleInputSubmit}>
        <div className="d-flex ">
          <input
            type="text"
            className="form-control"
            id="film-query-input"
            name="queryTerm"
            value={queryTerm}
            onChange={handleInputChange}
            placeholder="Cerca..."
          />
          <button type="submit" className="btn btn-danger">
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}
