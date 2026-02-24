export default function Quiz() {
  function alertQuiz() {
    setTimeout(() => {
      alert("Quiz Started! (This is a placeholder action.)");
    }, 200);
  }

  // alertQuiz();

  return (
    <>
      <div className="py-24 bg-gray-50 dark:bg-slate-900 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Quiz
        </h1>
      </div>
    </>
  );
}
