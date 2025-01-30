import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import { Feed } from "./pages/Feed/Feed";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className="body">
      <Hero />
      <div className="main container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
