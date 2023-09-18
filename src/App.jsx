import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Service from "./pages/Service";
function App() {
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<Service />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
