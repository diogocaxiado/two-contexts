import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MoviesPage } from "./components/MoviesPage";
import { MoviesProvider } from "./context/MoviesContext";
import { SeriesPage } from "./components/SeriesPage";
import { SeriesProvider } from "./context/SeriesContext";

export const App = () => {
  return (
    <BrowserRouter>
      <SeriesProvider>
        <MoviesProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Routes>
        </MoviesProvider>
      </SeriesProvider>
    </BrowserRouter>
  );
};
