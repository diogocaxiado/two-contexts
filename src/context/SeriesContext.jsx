import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const SeriesContext = createContext();

export const useSeries = () => {
  return useContext(SeriesContext);
};

const seriesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        series: action.payload,
        isLoading: false,
        isError: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
      };
    default:
      console.error("Nenhuma ação do contexto de séries foi informada");
  }
};

export const SeriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(seriesReducer, {
    series: [],
    isLoading: true,
    isError: null,
  });

  useEffect(() => {
    const fetchSeries = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios.get("http://api.tvmaze.com/shows");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        console.error("Erro ao tentar pegar ps dados da API de séries", error);
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchSeries();
  }, []);

  return (
    <SeriesContext.Provider value={state}>{children}</SeriesContext.Provider>
  );
};
