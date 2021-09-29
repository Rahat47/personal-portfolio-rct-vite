import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";

const HeroSection = () => {
    return (
        <section id="hero">
            <div id="home"></div>
            <div className="hero-container">
                <h1>Some Developer</h1>
                <h2>I&apos;m a Professional Web Developer In New York City</h2>
                <Link to="about" className="btn-scroll" title="Scroll Down">
                    <BsChevronDoubleDown />
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
