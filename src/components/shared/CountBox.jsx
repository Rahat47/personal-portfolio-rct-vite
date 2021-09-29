import CountUp from "react-countup";

const CountBox = ({ icon, count, color, description }) => {
    return (
        <div className="count-box">
            <i style={{ color }}>{icon}</i>
            <CountUp end={count} duration={2} />

            <p>{description}</p>
        </div>
    );
};

export default CountBox;
