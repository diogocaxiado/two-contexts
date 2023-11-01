import "./style.css";
import { useSeries } from "../../context/SeriesContext";

export const SeriesPage = () => {
  const { series, isLoading, isError } = useSeries();

  if (isLoading) {
    return (
      <div>
        <img alt="Carreganbdo os dados" src="https://i.gifer.com/ZKZg.gif" />
      </div>
    );
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <div className="series-page">
      <h2>Series do Momento</h2>
      <div className="series-list">
        {series.map((serie) => (
          <div key={serie.id} className="series-card">
            <h3>{serie.name}</h3>
            <p>{serie.summary}</p>
            <img alt={serie.name} src={serie.image.medium} />
          </div>
        ))}
      </div>
    </div>
  );
};
