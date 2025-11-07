import "../assets/styles/Visualizer.css";

export default function Visualizer({ array, isSorting }) {
  const maxVal = Math.max(...array, 100);
  return (
    <div className="visualizer">
      {array.map((value, i) => (
        <div
          key={i}
          className={`bar ${isSorting ? "unsorted" : "sorted"}`}
          style={{
            height: `${(value / maxVal) * 100}%`,
          }}
        >{value}</div>
      ))}
    </div>
  );
}
