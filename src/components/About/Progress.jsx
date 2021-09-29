import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = ({ name, value, icon }) => {
    return (
        <div className="progress">
            <span className="skill">
                <span className="skill_icon">{icon}</span> {name}{" "}
                <i className="val">{value}%</i>
            </span>

            <ProgressBar animated now={value} max={100} />
        </div>
    );
};

export default Progress;
