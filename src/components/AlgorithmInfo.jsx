import { useState, useEffect } from "react";
import "../assets/styles/AlgorithmInfo.css";
import { ALGORITHMS } from "../constants/algorithms";

export default function AlgorithmInfo({ selectedAlgorithm, result }) {
  const algo = ALGORITHMS.find((a) => a.func === selectedAlgorithm);

  const [displayedStats, setDisplayedStats] = useState({
    comparisons: 0,
    swaps: 0,
    timeTaken: 0,
  });

  // Easing function for speedometer-like smooth rise
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (!result) return;

    const duration = 1000; // 1 second
    const startTime = performance.now();

    const start = {
      comparisons: 0,
      swaps: 0,
      timeTaken: 0,
    };

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      setDisplayedStats({
        comparisons: Math.floor(result.comparisons * eased),
        swaps: Math.floor(result.swaps * eased),
        timeTaken: (result.timeTaken * eased).toFixed(2),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [result]);

  if (!algo) return null;

  return (
    <div className="algorithm-info">
      <h2>{algo.name} - Analysis</h2>

      <div className="analysis-section">
        <p><strong>Best Case:</strong> {algo.best}</p>
        <p><strong>Average Case:</strong> {algo.average}</p>
        <p><strong>Worst Case:</strong> {algo.worst}</p>
      </div>

      {result && (
        <div className="result-section">
          <p>
            <strong>Comparisons:</strong>{" "}
            <span className="count">{displayedStats.comparisons}</span>
          </p>
          <p>
            <strong>Swaps:</strong>{" "}
            <span className="count">{displayedStats.swaps}</span>
          </p>
          <p>
            <strong>Execution Time:</strong>{" "}
            <span className="count">{displayedStats.timeTaken} ms</span>
          </p>
        </div>
      )}

      <div className="applications">
        <p><strong>Applications:</strong> {algo.applications}</p>
      </div>
      <div className="applications">
        <p><strong>Advantages:</strong> {algo.pros}</p>
      </div>
      <div className="applications">
        <p><strong>Disadvantages:</strong> {algo.cons}</p>
      </div>
    </div>
  );
}
