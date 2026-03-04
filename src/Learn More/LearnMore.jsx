import React from "react";
import { useNavigate } from "react-router-dom";

export default function LearnMore() {
  const navigate = useNavigate();

  const quizzes = [
    {
      id: 1,
      title: "Programming Fundamentals",
      category: "Core CS",
      difficulty: "Easy–Medium",
      questions: 5,
      time: "8 min",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Web Development Basics",
      category: "Frontend",
      difficulty: "Medium",
      questions: 5,
      time: "8 min",
      rating: 4.7,
    },
    {
      id: 3,
      title: "JavaScript Deep Dive",
      category: "Programming",
      difficulty: "Medium",
      questions: 5,
      time: "8 min",
      rating: 4.6,
    },
    {
      id: 4,
      title: "React & State Management",
      category: "Frontend",
      difficulty: "Hard",
      questions: 5,
      time: "10 min",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Git & GitHub",
      category: "Tooling",
      difficulty: "Medium",
      questions: 5,
      time: "8 min",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Web Security & HTTP",
      category: "Backend / Security",
      difficulty: "Hard",
      questions: 5,
      time: "10 min",
      rating: 4.5,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Available Quizzes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Challenge yourself with our collection of engaging quizzes across
              various topics.
            </p>
          </div>

          {/* Quizzes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-linear-to-r from-blue-600 to-purple-600 h-32 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white px-4 text-center">
                    {quiz.title}
                  </h2>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {quiz.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(quiz.difficulty)}`}
                    >
                      {quiz.difficulty}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <p>📝 {quiz.questions} Questions</p>
                    <p>⏱️ {quiz.time}</p>
                    <p>⭐ {quiz.rating} Rating</p>
                  </div>

                  <button
                    onClick={() => navigate(`/quiz?id=${quiz.id}`)}
                    className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
