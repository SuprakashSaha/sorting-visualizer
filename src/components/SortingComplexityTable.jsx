import "../assets/styles/SortingComplexityTable.css";

const sortingData = [
  { name: "Bubble Sort", best: "O(n)", average: "O(n²)", worst: "O(n²)", space: "O(1)" },
  { name: "Insertion Sort", best: "O(n)", average: "O(n²)", worst: "O(n²)", space: "O(1)" },
  { name: "Selection Sort", best: "O(n²)", average: "O(n²)", worst: "O(n²)", space: "O(1)" },
  { name: "Merge Sort", best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" },
  { name: "Quick Sort", best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
  { name: "Heap Sort", best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(1)" },
  { name: "Shell Sort", best: "O(n log n)", average: "O(n (log n)²)", worst: "O(n²)", space: "O(1)" },
];

export default function SortingComplexityTable() {
  return (
    <div className="complexity-table-container">
      <h2>Sorting Algorithm Time Complexity Comparison</h2>
      <div className="table-wrapper">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Best Case</th>
              <th>Average Case</th>
              <th>Worst Case</th>
              <th>Space Complexity<br />(Worst)</th>
            </tr>
          </thead>
          <tbody>
            {sortingData.map((algo, index) => (
              <tr key={index}>
                <td>{algo.name}</td>
                <td>{algo.best}</td>
                <td>{algo.average}</td>
                <td>{algo.worst}</td>
                <td>{algo.space}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
