import problems from './problems/index.js';
import { arraysEqual } from './utils.js';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  const problemSelect = document.getElementById('problem-select');
  const problemTitle = document.getElementById('problem-title');
  const problemDescription = document.getElementById('problem-description');
  const problemHints = document.getElementById('problem-hints');
  const runButton = document.getElementById('run-button');
  const resultsContainer = document.getElementById('results');
  const hintsToggle = document.getElementById('hints-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Initialize CodeMirror
  const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
      mode: "javascript",
      theme: "dracula", // Default dark theme
      lineNumbers: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      indentUnit: 2,
      tabSize: 2,
      indentWithTabs: false,
      extraKeys: {
          "Ctrl-/": "toggleComment",
          "Cmd-/": "toggleComment"
      }
  });

  // Theme toggle functionality
  let darkMode = true;
  themeToggle.addEventListener('click', function() {
      darkMode = !darkMode;
      if (darkMode) {
          document.body.classList.remove('light-theme');
          editor.setOption('theme', 'dracula');
          themeToggle.textContent = '☀️';
      } else {
          document.body.classList.add('light-theme');
          editor.setOption('theme', 'eclipse');
          themeToggle.textContent = '🌙';
      }
  });

  // Load problem
  function loadProblem(problemKey) {
      const problem = problems[problemKey];
      problemTitle.textContent = problem.title;
      problemDescription.textContent = problem.description;
      
      // Set editor content and refresh
      editor.setValue(problem.template);
      editor.refresh();

      // Clear previous hints
      problemHints.innerHTML = '';

      // Add new hints
      problem.hints.forEach((hint, index) => {
          const hintElement = document.createElement('p');
          hintElement.innerHTML = `<strong>${hint.split(': ')[0]}:</strong> ${hint.split(': ')[1]}`;
          problemHints.appendChild(hintElement);
      });

      // Reset results
      resultsContainer.innerHTML = '<h3>Test Results</h3><p>Click "Run Tests" to see results.</p>';

      // Hide hints
      problemHints.style.display = 'none';
      hintsToggle.textContent = 'Show Hints';
  }

  // Toggle hints
  hintsToggle.addEventListener('click', function() {
      if (problemHints.style.display === 'none') {
          problemHints.style.display = 'block';
          hintsToggle.textContent = 'Hide Hints';
      } else {
          problemHints.style.display = 'none';
          hintsToggle.textContent = 'Show Hints';
      }
  });

  // Change problem
  problemSelect.addEventListener('change', function() {
      loadProblem(this.value);
  });

  // Run tests
  runButton.addEventListener('click', function() {
      const problemKey = problemSelect.value;
      const problem = problems[problemKey];
      const userCode = editor.getValue();

      // Clear previous results
      resultsContainer.innerHTML = '<h3>Test Results</h3>';

      try {
          // Execute user code to get their function
          const userFunction = new Function(`
              ${userCode}
              return ${problem.functionName};
          `)();

          // Run tests
          let allPassed = true;
          
          // For data structures like LinkedList, we need to test differently
          if (problemKey === 'linkedlist') {
              problem.testCases.forEach((testCase, index) => {
                  const resultElement = document.createElement('div');
                  resultElement.className = 'test-result';

                  try {
                      const result = testCase.test(userFunction);
                      const passed = Array.isArray(result) ? arraysEqual(result, testCase.expected) : result === testCase.expected;

                      if (passed) {
                          resultElement.className += ' test-pass';
                          resultElement.innerHTML = `<strong>Test: ${testCase.name}</strong> - Passed`;
                      } else {
                          allPassed = false;
                          resultElement.className += ' test-fail';
                          resultElement.innerHTML = `<strong>Test: ${testCase.name}</strong> - Failed - Expected: ${JSON.stringify(testCase.expected)}, Got: ${JSON.stringify(result)}`;
                      }
                  } catch (error) {
                      allPassed = false;
                      resultElement.className += ' test-fail';
                      resultElement.innerHTML = `<strong>Test: ${testCase.name}</strong> - Error - ${error.message}`;
                  }

                  resultsContainer.appendChild(resultElement);
              });
          } else {
              // Standard algorithm testing
              problem.testCases.forEach((testCase, index) => {
                  const resultElement = document.createElement('div');
                  resultElement.className = 'test-result';

                  try {
                      const result = testCase.test(userFunction);
                      const passed = Array.isArray(result) ? arraysEqual(result, testCase.expected) : result === testCase.expected;

                      if (passed) {
                          resultElement.className += ' test-pass';
                          resultElement.innerHTML = `<strong>Test: ${testCase.name}</strong> - Passed`;
                      } else {
                          allPassed = false;
                          resultElement.className += ' test-fail';
                          resultElement.innerHTML = `<strong>Test: ${testCase.name}</strong> - Failed - Expected: ${JSON.stringify(testCase.expected)}, Got: ${JSON.stringify(result)}`;
                      }
                  } catch (error) {
                      allPassed = false;
                      resultElement.className += ' test-fail';
                      resultElement.innerHTML = `<strong>Test: ${testCase.name}</strong> - Error - ${error.message}`;
                  }

                  resultsContainer.appendChild(resultElement);
              });
          }

          // Add summary
          const summaryElement = document.createElement('div');
          summaryElement.style.marginTop = '10px';
          summaryElement.style.fontWeight = 'bold';

          if (allPassed) {
              summaryElement.style.color = 'var(--success-text)';
              summaryElement.textContent = 'All tests passed! Great job!';
          } else {
              summaryElement.style.color = 'var(--error-text)';
              summaryElement.textContent = 'Some tests failed. Keep trying!';
          }

          resultsContainer.appendChild(summaryElement);

      } catch (error) {
          const errorElement = document.createElement('div');
          errorElement.className = 'test-result test-fail';
          errorElement.innerHTML = `<strong>Compilation Error:</strong> ${error.message}`;
          resultsContainer.appendChild(errorElement);
      }
  });

  // Load initial problem
  loadProblem(problemSelect.value);
});