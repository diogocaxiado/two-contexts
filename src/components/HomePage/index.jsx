import { Link } from "react-router-dom";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-container">
      <Link to="/series">
        <button>Séries do Momento</button>
      </Link>
      <Link to="/movies">
        <button>Filmes do Momento</button>
      </Link>
    </div>
  );
};
