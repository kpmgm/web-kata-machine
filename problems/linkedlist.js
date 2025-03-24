const linkedlist = {
  title: "Linked List",
  description: "Implement a singly linked list data structure with the following methods: append(val), prepend(val), delete(val), find(val), and toArray().",
  template: `// Node class for Linked List
class Node {
constructor(value) {
// TODO: Initialize with a value and next pointer
}
}

class LinkedList {
constructor() {
// TODO: Initialize head and tail pointers
}

// Add a node to the end of the list
append(value) {
// TODO: Implement append
}

// Add a node to the beginning of the list
prepend(value) {
// TODO: Implement prepend
}

// Delete the first node with the specified value
delete(value) {
// TODO: Implement delete
}

// Find and return the first node with the specified value (or null)
find(value) {
// TODO: Implement find
}

// Convert the linked list to an array
toArray() {
// TODO: Implement toArray
}
}`,
  functionName: "LinkedList",
  testCases: [
      { 
          name: "Append and toArray",
          test: (LinkedList) => {
              const list = new LinkedList();
              list.append(1);
              list.append(2);
              list.append(3);
              return list.toArray();
          },
          expected: [1, 2, 3]
      },
      { 
          name: "Prepend",
          test: (LinkedList) => {
              const list = new LinkedList();
              list.prepend(3);
              list.prepend(2);
              list.prepend(1);
              return list.toArray();
          },
          expected: [1, 2, 3]
      },
      { 
          name: "Delete value",
          test: (LinkedList) => {
              const list = new LinkedList();
              list.append(1);
              list.append(2);
              list.append(3);
              list.append(4);
              list.delete(2);
              list.delete(4);
              return list.toArray();
          },
          expected: [1, 3]
      },
      { 
          name: "Find value",
          test: (LinkedList) => {
              const list = new LinkedList();
              list.append(1);
              list.append(2);
              list.append(3);
              const found = list.find(2);
              return found !== null && found.value === 2;
          },
          expected: true
      },
      { 
          name: "Find non-existent value",
          test: (LinkedList) => {
              const list = new LinkedList();
              list.append(1);
              list.append(2);
              list.append(3);
              return list.find(4) === null;
          },
          expected: true
      }
  ],
  hints: [
      "Hint 1: A LinkedList node should contain a value and a reference to the next node.",
      "Hint 2: The LinkedList class should maintain references to the head and optionally the tail of the list.",
      "Hint 3: When deleting a node, you'll need to update the 'next' pointer of the previous node."
  ]
};

export default linkedlist;