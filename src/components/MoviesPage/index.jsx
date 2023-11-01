import { useMovies } from "../../context/MoviesContext";
import "./style.css";

export const MoviesPage = () => {
  const { movies, isLoading, error } = useMovies();

  if (isLoading) {
    return <div>Carregando os dados...</div>;
  }

  if (error) {
    return <div>Erro ao carregador os dados da API...</div>;
  }

  return (
    <div className="movies-page">
      <h2>Filmes do Momento</h2>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
