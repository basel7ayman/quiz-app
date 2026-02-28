import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/learnMore");
  }

  function handleQuiz() {
    navigate("/quiz");
  }

  return (
    <>
      <section className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  Master Your
                  <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Knowledge
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  Challenge yourself with our interactive quiz app. Test your
                  skills, learn new concepts, and track your progress.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleQuiz}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Quiz
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleStart}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  More quizzes
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-md aspect-square bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                <svg
                  className="w-2/3 h-2/3 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
