import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col  justify-center min-h-screen">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
