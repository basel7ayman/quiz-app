import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// quiz database with six sets of five questions each
const quizData = {
  1: {
    title: "General Knowledge",
    questions: [
      { text: "Capital of France?", options: ["Paris","Berlin","Rome","Madrid"], correct: "Paris" },
      { text: "Red Planet?", options: ["Earth","Mars","Jupiter","Venus"], correct: "Mars" },
      { text: "How many continents?", options: ["5","6","7","8"], correct: "7" },
      { text: "Who wrote '1984'?", options: ["Orwell","Huxley","Bradbury","Atwood"], correct: "Orwell" },
      { text: "Largest ocean?", options: ["Atlantic","Pacific","Indian","Arctic"], correct: "Pacific" },
    ],
  },
  2: {
    title: "Web Development Basics",
    questions: [
      { text: "What does HTML stand for?", options: ["Hypertext Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Language","None"], correct: "Hypertext Markup Language" },
      { text: "Which tag inserts a line break?", options: ["<br>","<lb>","<break>","<newline>"], correct: "<br>" },
      { text: "CSS stands for?", options: ["Cascading Style Sheets","Computer Style Sheets","Creative Style System","Colorful Style Sheets"], correct: "Cascading Style Sheets" },
      { text: "Which HTML element is used to define important text?", options: ["<strong>","<b>","<important>","<i>"], correct: "<strong>" },
      { text: "JavaScript file has extension?", options: [".js",".java",".script",".jsx"], correct: ".js" },
    ],
  },
  3: {
    title: "JavaScript Fundamentals",
    questions: [
      { text: "Which company developed JavaScript?", options: ["Netscape","Microsoft","Sun Microsystems","Oracle"], correct: "Netscape" },
      { text: "let vs var: which is block scoped?", options: ["let","var","both","none"], correct: "let" },
      { text: "Arrow function syntax uses?", options: ["=>","->","<-","=/="], correct: "=>" },
      { text: "Which method adds an element to end of array?", options: ["push","pop","shift","unshift"], correct: "push" },
      { text: "JSON stands for?", options: ["JavaScript Object Notation","Java Standard Output Notation","JavaScript Oriented Notation","None"], correct: "JavaScript Object Notation" },
    ],
  },
  4: {
    title: "React Advanced",
    questions: [
      { text: "Hook for state in functional components?", options: ["useState","useEffect","useContext","useReducer"], correct: "useState" },
      { text: "JSX stands for?", options: ["JavaScript XML","JavaScript eXtension","Just Simple XML","None"], correct: "JavaScript XML" },
      { text: "How to pass props?", options: ["<Component prop={value}/>","<Component>{value}</Component>","passProp(Component,value)","None"], correct: "<Component prop={value}/>" },
      { text: "Which hook runs on mount?", options: ["useEffect","useMemo","useCallback","useLayoutEffect"], correct: "useEffect" },
      { text: "Context API is used for?", options: ["state management","routing","styling","testing"], correct: "state management" },
    ],
  },
  5: {
    title: "History & Culture",
    questions: [
      { text: "Who discovered America?", options: ["Columbus","Vespucci","Magellan","Cook"], correct: "Columbus" },
      { text: "Year World War II ended?", options: ["1945","1918","1939","1965"], correct: "1945" },
      { text: "First man on the Moon?", options: ["Neil Armstrong","Buzz Aldrin","Yuri Gagarin","Michael Collins"], correct: "Neil Armstrong" },
      { text: "The Renaissance began in which country?", options: ["Italy","France","Spain","Germany"], correct: "Italy" },
      { text: "Great wall is located in?", options: ["China","India","Egypt","Mexico"], correct: "China" },
    ],
  },
  6: {
    title: "Chemistry 101",
    questions: [
      { text: "Atomic number of Oxygen?", options: ["8","6","7","9"], correct: "8" },
      { text: "pH of pure water?", options: ["7","1","14","0"], correct: "7" },
      { text: "Chemical symbol for Gold?", options: ["Au","Ag","Gd","Go"], correct: "Au" },
      { text: "H2O is?", options: ["Water","Hydrogen peroxide","Hydrogen oxide","Hydroxide"], correct: "Water" },
      { text: "Periodic table was created by?", options: ["Mendeleev","Newton","Einstein","Curie"], correct: "Mendeleev" },
    ],
  },
};

export default function Quiz() {
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
                  onClick={() => (window.location.href = '/')}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
                >
                  Return Home
                </button>
                <button
                  onClick={() => window.location.href = `/learnMore`}
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
