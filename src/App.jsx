import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MoviesPage } from "./components/MoviesPage";
import { MoviesProvider } from "./context/MoviesContext";

export const App = () => {
  return (
    <BrowserRouter>
      <MoviesProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </MoviesProvider>
    </BrowserRouter>
  );
};
