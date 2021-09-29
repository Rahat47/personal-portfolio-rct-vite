const SectionTitle = ({ title, slogan }) => {
    return (
        <div className="section-title">
            <span>{title}</span>
            <h2>{title}</h2>
            <p>{slogan}</p>
        </div>
    );
};

export default SectionTitle;
