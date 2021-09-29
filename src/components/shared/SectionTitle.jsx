import FadeIn from "react-fade-in";

const SectionTitle = ({ title, slogan }) => {
    return (
        <div className="section-title">
            <FadeIn>
                <span>{title}</span>
                <h2>{title}</h2>
                <p>{slogan}</p>
            </FadeIn>
        </div>
    );
};

export default SectionTitle;
