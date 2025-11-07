import "../assets/styles/Controls.css";
import { ALGORITHMS } from "../constants/algorithms";

export default function Controls({
  selectedAlgorithm,
  setSelectedAlgorithm,
  onGenerate,
  onRun,
  arraySize,
  setArraySize,
  isSorting,
}) {
  return (
    <div className="controls">
      <select
        disabled={isSorting}
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
      >
        {ALGORITHMS.map((algo) => (
          <option key={algo.id} value={algo.func}>
            {algo.name}
          </option>
        ))}
      </select>

      <div className="slider-container">
        <label>Array Size: {arraySize}</label>
        <input
          type="range"
          min="10"
          max="200"
          value={arraySize}
          disabled={isSorting}
          onChange={(e) => setArraySize(Number(e.target.value))}
        />
      </div>

      <button onClick={() => onGenerate(arraySize)} disabled={isSorting}>
        Generate New Array
      </button>

      <button onClick={() => onRun(selectedAlgorithm)} disabled={isSorting}>
        {isSorting ? "Sorting..." : "Sort"}
      </button>
    </div>
  );
}
