import "./App.css";
import Welcome from "./LoginPage/Welcome page";
import Login from "./LoginPage/Login";
import Signup from "./LoginPage/Signup";
import Home from "./Mainpage/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Onboarding from "./OnboardingPage/Onboarding";
import Carousel from "./OnboardingPage/Carousel";
import Airtime from "./Bills/Airtime";
import Main from "./components/Main";
import Wallet from "./Mainpage/Wallet";
import Paybill from "./Mainpage/Paybill";
import Setting from "./Mainpage/Setting";
import Data from "./Bills/Data";
import Electricity from "./Bills/Electricity";
import EEDC from "./Bills/EEDC";

function App() {
  // const location = useLocation();
  // const excludeRoutes = ["/", "/Login", "/Signup", "/Onboarding", "/Carousel"];
  // const showNavbar = !excludeRoutes.includes(location.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Airtime" element={<Airtime />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Electricity" element={<Electricity />} />
        <Route path="/EEDC" element={<EEDC />} />

        <Route element={<Main />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Paybill" element={<Paybill />} />
          <Route path="/Setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
