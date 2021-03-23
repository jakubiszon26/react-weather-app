export default function weatherImg({ weather, weatherDescription }) {
  return (
    <img title={weatherDescription} className="weather-img" src={`${weather}.svg`} alt="weather img" />
  );
}
