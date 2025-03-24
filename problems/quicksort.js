const quicksort = {
  title: "Quicksort",
  description: "Implement the quicksort algorithm to sort an array of numbers in ascending order. Your function should take an array as input and return a new sorted array.",
  template: `function quickSort(arr) {
// Your implementation here
}`,
  functionName: "quickSort",
  testCases: [
      { 
          name: "Sort mixed values",
          test: (quickSort) => quickSort([3, 1, 4, 1, 5, 9, 2, 6]),
          expected: [1, 1, 2, 3, 4, 5, 6, 9]
      },
      { 
          name: "Sort empty array",
          test: (quickSort) => quickSort([]),
          expected: []
      },
      { 
          name: "Sort single element",
          test: (quickSort) => quickSort([1]),
          expected: [1]
      },
      { 
          name: "Sort reverse array",
          test: (quickSort) => quickSort([5, 4, 3, 2, 1]),
          expected: [1, 2, 3, 4, 5]
      },
      { 
          name: "Sort identical elements",
          test: (quickSort) => quickSort([1, 1, 1, 1]),
          expected: [1, 1, 1, 1]
      }
  ],
  hints: [
      "Hint 1: Quicksort is a divide-and-conquer algorithm that works by selecting a pivot element and partitioning the array around it.",
      "Hint 2: The basic steps are: choose a pivot, place elements less than the pivot to the left, place elements greater than the pivot to the right, then recursively apply the same process to the subarrays.",
      "Hint 3: A common approach is to select the last element as the pivot."
  ]
};

export default quicksort;