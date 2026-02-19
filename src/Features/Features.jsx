import React from 'react'

export default function Features() {
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Fast & Responsive',
      description: 'Lightning-fast quiz loading with a responsive design that works on all devices.'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track your progress with detailed analytics and performance metrics.'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Get quiz recommendations tailored to your learning needs and goals.'
    },
    {
      id: 4,
      icon: '🌐',
      title: 'Multiple Categories',
      description: 'Choose from hundreds of quizzes across different subjects and difficulty levels.'
    },
    {
      id: 5,
      icon: '🏆',
      title: 'Leaderboards',
      description: 'Compete with others and climb the leaderboards to prove your expertise.'
    },
    {
      id: 6,
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is secure and private. We never share your information.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover all the features that make QuizMaster the best platform for learning and assessment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
