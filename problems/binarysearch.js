const binarysearch = {
  title: "Binary Search",
  description: "Implement the binary search algorithm to find the index of a target value in a sorted array. If the target is not found, return -1.",
  template: `function binarySearch(arr, target) {
// Your implementation here
}`,
  functionName: "binarySearch",
  testCases: [
      { 
          name: "Find middle element",
          test: (binarySearch) => binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5),
          expected: 4
      },
      { 
          name: "Element not found",
          test: (binarySearch) => binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10),
          expected: -1
      },
      { 
          name: "Find in odd-length array",
          test: (binarySearch) => binarySearch([1, 3, 5, 7, 9], 3),
          expected: 1
      },
      { 
          name: "Element not present",
          test: (binarySearch) => binarySearch([2, 4, 6, 8, 10], 5),
          expected: -1
      },
      { 
          name: "Find in duplicate elements",
          test: (binarySearch) => binarySearch([1, 1, 1, 1, 1], 1),
          expected: 2 // Middle index
      }
  ],
  hints: [
      "Hint 1: Binary search works by repeatedly dividing the search interval in half.",
      "Hint 2: Start with the middle element of the array and compare it with the target value.",
      "Hint 3: If the target is less than the middle element, search the left half, otherwise search the right half."
  ]
};

export default binarysearch;