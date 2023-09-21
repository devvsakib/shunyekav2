import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Service from "./pages/Service";
import ScrollRestoration from "./hooks/useRestoreScroll";
import Contact from "./pages/Contact";
import Cta from "./components/Common/Cta";
function App() {
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <Header />
            <ScrollRestoration />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:id" element={<Service />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
            <Cta />
            <Footer />
        </div>
    )
}

export default App
