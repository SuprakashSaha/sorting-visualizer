import { useState } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Visualizer from "./components/Visualizer";
import AlgorithmInfo from "./components/AlgorithmInfo";
import Footer from "./components/Footer";
import { useSorting } from "./hooks/useSorting";

function App() {
  const {
    array,
    result,
    generateArray,
    runSort,
    isSorting,
    arraySize,
    setArraySize,
  } = useSorting();

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("runBubbleSort");

  return (
    <div>
      <Header />
      <Controls
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        onGenerate={generateArray}
        onRun={runSort}
        arraySize={arraySize}
        setArraySize={setArraySize}
        isSorting={isSorting}
      />
      <Visualizer array={array} isSorting={isSorting} />
      <AlgorithmInfo selectedAlgorithm={selectedAlgorithm} result={result} />
      <Footer />
    </div>
  );
}

export default App;
