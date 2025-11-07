export const ALGORITHMS = [
  {
    id: "bubble",
    name: "Bubble Sort",
    func: "runBubbleSort",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    applications: "Used in teaching and basic visualization of sorting steps, When simplicity and low code size matter more than performance (e.g., small microcontroller routines).",
    pros : "Simple to implement and understand.",
    cons : "Inefficient on large lists; generally performs worse than the similar insertion sort."
  },
  {
    id: "insertion",
    name: "Insertion Sort",
    func: "runInsertionSort",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    applications: "Good for small datasets or nearly sorted arrays.",
    pros : "Efficient for small data sets and mostly sorted arrays.",
    cons : "Inefficient on large lists compared to more advanced algorithms."
  },
  {
    id: "selection",
    name: "Selection Sort",
    func: "runSelectionSort",
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    applications: "Useful when memory writes are costly.",
    pros : "Performs well on small lists; makes the minimum number of swaps.",
    cons : "Inefficient on large lists; generally performs worse than the similar insertion sort."
  },
  {
    id: "merge",
    name: "Merge Sort",
    func: "runMergeSort",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
    applications: "Efficient for large datasets and linked lists.",
    pros : "Stable sort; efficient for large data sets.",
    cons : "Requires additional memory for merging; slower on small lists compared to simpler algorithms."
  },
  {
    id: "quick",
    name: "Quick Sort",
    func: "runQuickSort",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    applications: "Widely used in system-level sorting (like C’s qsort).",
    pros : "Very efficient for large datasets; in-place sorting.",
    cons : "Unstable sort; worst-case performance can be poor without good pivot selection."
  },
  {
    id: "heap",
    name: "Heap Sort",
    func: "runHeapSort",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
    applications: "Used in priority queues and heap-based structures.",
    pros : "In-place sorting; good worst-case performance.",
    cons : "Not a stable sort; generally slower than quicksort in practice."
  },
  {
    id: "shell",
    name: "Shell Sort",
    func: "runShellSort",
    best: "O(n log n)",
    average: "O(n^(3/2))",
    worst: "O(n²)",
    applications: "Improves insertion sort for larger arrays.",
    pros : "More efficient than simple quadratic algorithms; in-place sorting.",
    cons : "Performance heavily depends on gap sequence; not stable."
  },
];
