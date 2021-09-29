import {
    BiPlus,
    BiCodeAlt,
    BiCalendarEdit,
    BiRightArrowAlt,
} from "react-icons/bi";

const PortfolioItem = ({ item, setIsOpen, setPhotoIndex }) => {
    return (
        <div className="portfolio-item filter-app">
            <div className="portfolio-img">
                <img
                    src={item.image}
                    loading="lazy"
                    className="img-fluid"
                    alt={item.title}
                />
                <div className="portfolio-overlay">
                    <BiPlus
                        onClick={() => {
                            setIsOpen(true);
                            setPhotoIndex(item.id - 1);
                        }}
                    />
                </div>
            </div>
            <div className="portfolio-info">
                <h4>{item.title}</h4>
                <div className="portfolio-info__meta">
                    <span>
                        <BiCodeAlt /> &nbsp; {item.language}
                    </span>
                    <span>
                        <BiCalendarEdit /> &nbsp; {item.date}
                    </span>
                </div>
                <p>{item.description}</p>

                <div className="portfolio-info__action">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Details <BiRightArrowAlt />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
