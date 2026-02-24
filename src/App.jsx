import "./App.css";
import "flowbite";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import LearnMore from "./Learn More/LearnMore";
import Footer from "./Footer/Footer";
import Quiz from "./Quiz/Quiz";

function App() {
  const location = useLocation();

  const hideFooter = location.pathname === "/quiz";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
