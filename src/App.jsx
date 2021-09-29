import "./App.css";
import About from "./components/About/About";
import ContactMe from "./components/Contact/ContactMe";
import HeroSection from "./components/Hero/HeroSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <main id="home">
                <HeroSection />
                <About />
                <Portfolio />
                <ContactMe />
            </main>
            <Footer />
        </>
    );
}

export default App;
