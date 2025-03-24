const mergesort = {
  title: "Merge Sort",
  description: "Implement the merge sort algorithm to sort an array of numbers in ascending order. Your function should take an array as input and return a new sorted array.",
  template: `function mergeSort(arr) {
// Your implementation here
}`,
  functionName: "mergeSort",
  testCases: [
      { 
          name: "Sort mixed values",
          test: (mergeSort) => mergeSort([3, 1, 4, 1, 5, 9, 2, 6]),
          expected: [1, 1, 2, 3, 4, 5, 6, 9]
      },
      { 
          name: "Sort empty array",
          test: (mergeSort) => mergeSort([]),
          expected: []
      },
      { 
          name: "Sort single element",
          test: (mergeSort) => mergeSort([1]),
          expected: [1]
      },
      { 
          name: "Sort reverse array",
          test: (mergeSort) => mergeSort([5, 4, 3, 2, 1]),
          expected: [1, 2, 3, 4, 5]
      },
      { 
          name: "Sort identical elements",
          test: (mergeSort) => mergeSort([1, 1, 1, 1]),
          expected: [1, 1, 1, 1]
      }
  ],
  hints: [
      "Hint 1: Merge sort is a divide-and-conquer algorithm that divides the array into halves, sorts them separately, and then merges them.",
      "Hint 2: The key operation is the merging of two sorted subarrays into a single sorted array.",
      "Hint 3: Consider using a helper function to handle the merging process."
  ]
};

export default mergesort;