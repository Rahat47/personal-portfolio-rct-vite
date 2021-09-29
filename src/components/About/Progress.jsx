import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = ({ name, value }) => {
    return (
        <div className="progress">
            <span className="skill">
                {name} <i className="val">{value}%</i>
            </span>

            <ProgressBar animated now={value} max={100} />
        </div>
    );
};

export default Progress;
