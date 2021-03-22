
export default function weatherImg({ weather }) {
  
  return <img className="weather-img" src={`${weather}.svg`} alt="weather img" />;
}
