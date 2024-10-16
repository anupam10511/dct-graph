import { regions } from "../constants";
export default function Filter({ activeRegion, handleClick }) {
  return (
    <div>
      {/* Legends */}
      {regions.map((region) => (
        <button
          key={region}
          style={{
            backgroundColor: activeRegion === region ? "#ddd" : "#fff",
            padding: "5px",
            margin: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleClick(activeRegion === region ? null : region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
}
