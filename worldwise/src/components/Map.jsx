import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat);
  console.log(lng);
  return (
    <div className={styles.mapContainer}>
      <h1>Maps</h1>
      <h2>
        position :{lat} {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 23, lng: 40 })}>
        change POS
      </button>
    </div>
  );
}

export default Map;
