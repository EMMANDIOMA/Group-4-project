import "./App.css";
import Welcome from "./LoginPage/Welcome page";
import Login from "./LoginPage/Login";
import Signup from "./LoginPage/Signup";
import Home from "./Mainpage/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Onboarding from "./OnboardingPage/Onboarding";
import Carousel from "./OnboardingPage/Carousel";
import Navbar from "./Mainpage/Navbar";
function App() {
  const location = useLocation();
  const excludeRoutes = ["/", "/Login", "/Signup", "/Onboarding", "/Carousel"];
  const showNavbar = !excludeRoutes.includes(location.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      {showNavbar && <Navbar />}
    </>
  );
}

export default App;
