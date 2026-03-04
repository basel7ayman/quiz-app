import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// quiz database with six software-focused sets of five questions each
const quizData = {
  1: {
    title: "Programming Fundamentals",
    questions: [
      {
        text: "Which time complexity is better for large inputs?",
        options: ["O(n^2)", "O(n log n)", "O(2^n)", "O(n!)"],
        correct: "O(n log n)",
      },
      {
        text: "Which data structure works on a FIFO principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correct: "Queue",
      },
      {
        text: "In most languages, which keyword defines a constant that cannot be reassigned?",
        options: ["let", "var", "const", "static"],
        correct: "const",
      },
      {
        text: "What does \"refactoring\" primarily aim to improve?",
        options: [
          "Performance only",
          "Code readability and structure",
          "Database schema",
          "Network latency",
        ],
        correct: "Code readability and structure",
      },
      {
        text: "Which of these is an example of a strongly typed language?",
        options: ["JavaScript", "Python", "TypeScript", "PHP"],
        correct: "TypeScript",
      },
    ],
  },
  2: {
    title: "Web Development Basics",
    questions: [
      {
        text: "Which HTML element is most appropriate for a navigation bar?",
        options: ["<div>", "<section>", "<nav>", "<header>"],
        correct: "<nav>",
      },
      {
        text: "Which CSS layout module is best suited for one-dimensional layouts?",
        options: ["Flexbox", "Grid", "Float", "Positioning"],
        correct: "Flexbox",
      },
      {
        text: "In CSS Grid, which property defines the rows?",
        options: [
          "grid-template-columns",
          "grid-template-rows",
          "grid-auto-flow",
          "grid-row-start",
        ],
        correct: "grid-template-rows",
      },
      {
        text: "Which HTTP status code represents a successful GET request?",
        options: ["200", "301", "400", "500"],
        correct: "200",
      },
      {
        text: "Which HTML attribute improves accessibility by describing images?",
        options: ["title", "alt", "aria-label", "description"],
        correct: "alt",
      },
    ],
  },
  3: {
    title: "JavaScript Deep Dive",
    questions: [
      {
        text: "Which keyword creates a block-scoped variable?",
        options: ["var", "let", "function", "static"],
        correct: "let",
      },
      {
        text: "What does `Array.prototype.map` return?",
        options: [
          "A modified original array",
          "A new array",
          "An iterator",
          "A promise",
        ],
        correct: "A new array",
      },
      {
        text: "Which statement best describes `async/await`?",
        options: [
          "Syntax sugar over promises",
          "Replacement for callbacks only",
          "Feature only in Node.js",
          "Blocks the main thread",
        ],
        correct: "Syntax sugar over promises",
      },
      {
        text: "What is the value of `this` in a regular function used as an event handler in the browser (non-strict mode)?",
        options: ["The window object", "undefined", "The element that fired the event", "null"],
        correct: "The element that fired the event",
      },
      {
        text: "Which built-in method converts a JSON string into an object?",
        options: ["JSON.stringify", "Object.fromJSON", "JSON.toObject", "JSON.parse"],
        correct: "JSON.parse",
      },
    ],
  },
  4: {
    title: "React & State Management",
    questions: [
      {
        text: "Which hook is best suited for managing complex state logic in a single component?",
        options: ["useState", "useEffect", "useReducer", "useMemo"],
        correct: "useReducer",
      },
      {
        text: "Where is the safest place to perform data fetching in a React component?",
        options: [
          "Directly in the component body",
          "Inside useEffect",
          "Inside render return",
          "In CSS files",
        ],
        correct: "Inside useEffect",
      },
      {
        text: "What problem does the Context API mainly solve?",
        options: [
          "Too many HTTP calls",
          "Prop drilling across deeply nested components",
          "CSS conflicts",
          "Server-side rendering",
        ],
        correct: "Prop drilling across deeply nested components",
      },
      {
        text: "Which hook is used to memoize expensive calculations?",
        options: ["useMemo", "useCallback", "useRef", "useLayoutEffect"],
        correct: "useMemo",
      },
      {
        text: "What is a common performance issue React DevTools can help you find?",
        options: [
          "Memory leaks in the OS",
          "Unnecessary re-renders",
          "Database deadlocks",
          "DNS misconfiguration",
        ],
        correct: "Unnecessary re-renders",
      },
    ],
  },
  5: {
    title: "Git & GitHub",
    questions: [
      {
        text: "Which command creates a new Git branch and switches to it?",
        options: [
          "git checkout new",
          "git branch new && git switch new",
          "git switch -c new",
          "git commit -b new",
        ],
        correct: "git switch -c new",
      },
      {
        text: "Which file should you edit to prevent certain files from being committed?",
        options: [".gitignore", ".gitconfig", ".env", "package.json"],
        correct: ".gitignore",
      },
      {
        text: "What does `git pull origin main` do?",
        options: [
          "Only fetches from remote",
          "Only merges local branches",
          "Fetches and merges `origin/main` into current branch",
          "Deletes the main branch",
        ],
        correct: "Fetches and merges `origin/main` into current branch",
      },
      {
        text: "In GitHub, what is a Pull Request primarily used for?",
        options: [
          "Requesting server resources",
          "Proposing and reviewing code changes",
          "Restarting CI pipelines",
          "Changing repository visibility",
        ],
        correct: "Proposing and reviewing code changes",
      },
      {
        text: "Which command shows a one-line summary of recent commits?",
        options: ["git status", "git log --oneline", "git diff", "git reflog"],
        correct: "git log --oneline",
      },
    ],
  },
  6: {
    title: "Web Security & HTTP",
    questions: [
      {
        text: "Which HTTP method is typically used for creating a new resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: "POST",
      },
      {
        text: "What does HTTPS add on top of HTTP?",
        options: ["Caching", "Compression", "Encryption via TLS", "IPv6 support"],
        correct: "Encryption via TLS",
      },
      {
        text: "Which vulnerability allows attackers to run scripts in a victim's browser?",
        options: ["SQL Injection", "XSS (Cross-Site Scripting)", "CSRF", "DOS"],
        correct: "XSS (Cross-Site Scripting)",
      },
      {
        text: "What is the main purpose of an HTTP status code in the 4xx range?",
        options: [
          "Server errors",
          "Informational messages",
          "Redirection",
          "Client errors",
        ],
        correct: "Client errors",
      },
      {
        text: "Which header is commonly used to prevent browsers from loading a site in an iframe?",
        options: ["Content-Type", "X-Frame-Options", "Cache-Control", "Accept"],
        correct: "X-Frame-Options",
      },
    ],
  },
};

export default function Quiz() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const quizId = searchParams.get("id");
  const quiz = quizData[quizId] || quizData[1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[currentIndex];

  const handleOptionClick = (option) => {
    if (selected) return; // prevent multiple clicks

    setSelected(option);
    if (option === question.correct) {
      setScore((s) => s + 1);
    }
    // if this was the last question, show the finished modal after 1s
    if (currentIndex === quiz.questions.length - 1) {
      setTimeout(() => setFinished(true), 1000);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setFinished(false);
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col items-center pt-16 px-4">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {quiz.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Question {currentIndex + 1} / {quiz.questions.length}
        </p>
        <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-4">
          

          {/* score badge (hide when finished) */}
          {!(finished) && (
            <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              {score}
            </div>
          )}

          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
            {question.text}
          </p>
        </div>

        <div className="space-y-3">
          {question.options.map((opt) => {
            let base =
              "w-full text-left px-4 py-3 rounded-lg border transition-colors hover:text-gray-900 dark:hover:text-gray-900";
            if (selected) {
              if (opt === question.correct) {
                base += " bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300";
              } else if (opt === selected) {
                base += " bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-300";
              } else {
                base += " opacity-50";
              }
            } else {
              base += " bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200";
            }
            return (
              <button
                key={opt}
                disabled={!!selected}
                className={base}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selected && currentIndex < quiz.questions.length - 1 && (
          <div className="mt-6 flex justify-between items-center">
            
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
            >
              Next
            </button>
          </div>
        )}

        {/* finished modal (show 1s after last answer) */}
        {finished && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-sm text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Quiz Complete!
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                You scored <span className="font-semibold">{score}</span> out of{' '}
                {quiz.questions.length}.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => navigate("/")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
                >
                  Return Home
                </button>
                <button
                  onClick={() => navigate("/learnMore")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
                >
                  Start Another Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
