import { Fade } from "react-reveal";
const SectionTitle = ({ title, slogan }) => {
    return (
        <div className="section-title">
            <Fade bottom>
                <span>{title}</span>
                <h2>{title}</h2>
                <p>{slogan}</p>
            </Fade>
        </div>
    );
};

export default SectionTitle;
