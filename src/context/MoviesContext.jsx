import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export const useMovies = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=7c43e7fc7b1dfaef0a2a5de6e9d5ab24"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao tentar consumir a API de filmes", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, isLoading, error }}>
      {children}
    </MoviesContext.Provider>
  );
};
