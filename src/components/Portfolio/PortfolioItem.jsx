import { BiPlus } from "react-icons/bi";

const PortfolioItem = ({ item, setIsOpen, setPhotoIndex }) => {
    return (
        <div className="portfolio-item filter-app">
            <div className="portfolio-img">
                <img src={item.image} className="img-fluid" alt={item.title} />
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
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default PortfolioItem;
