import "../assets/styles/AlgorithmInfo.css";
import { ALGORITHMS } from "../constants/algorithms";

export default function AlgorithmInfo({ selectedAlgorithm, result }) {
  const algo = ALGORITHMS.find((a) => a.func === selectedAlgorithm);

  if (!algo) return null;

  return (
    <div className="algorithm-info">
      <h2>{algo.name} - Analysis</h2>
      <p><strong>Best Case:</strong> {algo.best}</p>
      <p><strong>Average Case:</strong> {algo.average}</p>
      <p><strong>Worst Case:</strong> {algo.worst}</p>
      {result && (
        <>
          <p><strong>Comparisons:</strong> {result.comparisons}</p>
          <p><strong>Swaps:</strong> {result.swaps}</p>
          <p><strong>Execution Time:</strong> {result.timeTaken} ms</p>
        </>
      )}
      <p><strong>Applications:</strong> {algo.applications}</p>
    </div>
  );
}
