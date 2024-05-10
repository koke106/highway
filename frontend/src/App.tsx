import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./modules/home";
import News from "./modules/news";
import Team from "./modules/team";
import About from "./modules/about";
import MainTeam from "./modules/team/mainTeam";
import Footer from "./components/Footer/footer";
import Race from "./modules/team/race";
import Car from "./modules/car";
import InfoCar from "./modules/car/infoCar";

const App = () => {
 return (
   <Router>
    <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/team/mainTeam" element={<MainTeam />} />
        <Route path="/team/race" element={<Race />} />
        <Route path="/car" element={<Car />} />
        <Route path="/car/infoCar" element={<InfoCar />} />
      </Routes>
    </main>
    <Footer />
   </Router>
 );
};

export default App;