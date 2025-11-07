import { useState, useEffect } from "react";
import { loadWasm } from "../Loadwasm/loadWasm";

export function useSorting() {
  const [wasm, setWasm] = useState(null);
  const [array, setArray] = useState([]);
  const [arrayColors, setArrayColors] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [result, setResult] = useState(null);
  const [arraySize, setArraySize] = useState(50);

  useEffect(() => {
    async function init() {
      const module = await loadWasm();
      setWasm(module);
      generateArray(arraySize);
    }
    init();
  }, []);

  const generateArray = (size = arraySize) => {
    const newArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArr);
    setArrayColors(new Array(size).fill("#ffa500")); // orange = unsorted
    setResult(null);
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // 🧩 Improved animation with green/orange/white logic
  // 🧩 Improved animation with green/orange/white logic
  const animateSort = async (sortedArray) => {
    const steps = [];
    const arr = [...array];

    // Record steps like before (bubble sort logic)
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        steps.push({ compare: [j, j + 1] });
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          steps.push({ swap: [j, j + 1], newArray: [...arr] });
        }
      }
      steps.push({ sortedTill: arr.length - i - 1 });
    }

    // Animate the sorting visually
    const colors = new Array(arr.length).fill("#ffa500");

    for (let step of steps) {
      if (step.compare) {
        const [a, b] = step.compare;
        const tempColors = [...colors];
        tempColors[a] = tempColors[b] = "#ffffff"; // white for comparison
        setArrayColors([...tempColors]);
      }

      if (step.swap) {
        const [a, b] = step.swap;
        setArray([...step.newArray]);
        const tempColors = [...colors];
        tempColors[a] = tempColors[b] = "#ffffff"; // highlight swapped
        setArrayColors([...tempColors]);
      }

      if (step.sortedTill !== undefined) {
        colors[step.sortedTill] = "#00ff7f"; // green for sorted part
        setArrayColors([...colors]);
      }

      // 🕐 slower animation speed
      await sleep(150); // ← increase this to slow down more (e.g., 100, 150, 200)
    }

    // Final all-green
    setArray(sortedArray);
    setArrayColors(new Array(sortedArray.length).fill("#00ff7f"));
  };


  const runSort = async (algorithmFunc) => {
    if (!wasm || !algorithmFunc) return;
    setIsSorting(true);
    try {
      const res = wasm[algorithmFunc](array);
      setResult(res);
      await animateSort(res.sortedArray);
    } catch (err) {
      console.error("Error running sort:", err);
    } finally {
      setIsSorting(false);
    }
  };

  return {
    wasm,
    array,
    arrayColors,
    arraySize,
    setArraySize,
    isSorting,
    result,
    generateArray,
    runSort,
  };
}
