const bubblesort = {
  title: "Bubble Sort",
  description: "Implement the bubble sort algorithm to sort an array of numbers in ascending order. Your function should take an array as input and return a new sorted array without modifying the original array.",
  template: `function bubbleSort(arr) {
  // Your implementation here
}`,
  functionName: "bubbleSort",
  testCases: [
    {
      name: "Sort mixed values",
      test: (bubbleSort) => bubbleSort([3, 1, 4, 1, 5, 9, 2, 6]),
      expected: [1, 1, 2, 3, 4, 5, 6, 9]
    },
    {
      name: "Sort empty array",
      test: (bubbleSort) => bubbleSort([]),
      expected: []
    },
    {
      name: "Sort single element",
      test: (bubbleSort) => bubbleSort([1]),
      expected: [1]
    },
    {
      name: "Sort reverse array",
      test: (bubbleSort) => bubbleSort([5, 4, 3, 2, 1]),
      expected: [1, 2, 3, 4, 5]
    },
    {
      name: "Sort identical elements",
      test: (bubbleSort) => bubbleSort([1, 1, 1, 1]),
      expected: [1, 1, 1, 1]
    },
    {
      name: "Early termination optimization",
      test: (bubbleSort) => {
        const arr = [1, 2, 3, 5, 4];
        return bubbleSort(arr);
      },
      expected: [1, 2, 3, 4, 5]
    }
  ],
  hints: [
    "Hint 1: Bubble sort works by repeatedly stepping through the array and swapping adjacent elements if they are in the wrong order.",
    "Hint 2: The algorithm gets its name because smaller elements 'bubble' to the top of the array with each iteration.",
    "Hint 3: You can optimize bubble sort by stopping early if no swaps were made during a pass through the array.",
    "Hint 4: Remember to create a copy of the input array to avoid modifying the original."
  ]
};
export default bubblesort;