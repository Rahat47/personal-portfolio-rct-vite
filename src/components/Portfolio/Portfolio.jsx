import { useState } from "react";
import { Container } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "react-image-lightbox";

import SectionTitle from "../shared/SectionTitle";
import PortfolioItem from "./PortfolioItem";
import { projects, projectImages } from "./projects";
import { Fade } from "react-reveal";
import "react-image-lightbox/style.css";

const Portfolio = () => {
    const [category, setCategory] = useState("All");
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="portfolio" className="portfolio">
            <Container>
                <SectionTitle
                    title="Portfolio"
                    slogan="Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"
                />

                <ul
                    id="portfolio-flters"
                    className="d-flex justify-content-center flex-wrap"
                >
                    <li
                        onClick={() => setCategory("All")}
                        className={category === "All" ? "filter-active" : ""}
                    >
                        All
                    </li>
                    <li
                        className={
                            category === "Branding" ? "filter-active" : ""
                        }
                        onClick={() => setCategory("Branding")}
                    >
                        Branding
                    </li>
                    <li
                        className={
                            category === "Designing" ? "filter-active" : ""
                        }
                        onClick={() => setCategory("Designing")}
                    >
                        Designing
                    </li>
                    <li
                        className={
                            category === "Development" ? "filter-active" : ""
                        }
                        onClick={() => setCategory("Development")}
                    >
                        Development
                    </li>
                    <li
                        className={
                            category === "Photography" ? "filter-active" : ""
                        }
                        onClick={() => setCategory("Photography")}
                    >
                        Photography
                    </li>
                </ul>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter={12}>
                        {projects
                            .filter(
                                items =>
                                    items.category === category ||
                                    category === "All"
                            )
                            .map((item, i) => (
                                <Fade cascade bottom key={i}>
                                    <PortfolioItem
                                        item={item}
                                        setIsOpen={setIsOpen}
                                        setPhotoIndex={setPhotoIndex}
                                    />{" "}
                                </Fade>
                            ))}
                    </Masonry>
                </ResponsiveMasonry>

                {/* Image box */}
                {isOpen && (
                    <Lightbox
                        mainSrc={projectImages[photoIndex]}
                        nextSrc={
                            projectImages[
                                (photoIndex + 1) % projectImages.length
                            ]
                        }
                        prevSrc={
                            projectImages[
                                (photoIndex + projectImages.length - 1) %
                                    projectImages.length
                            ]
                        }
                        imagePadding={100}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + projectImages.length - 1) %
                                    projectImages.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex(
                                (photoIndex + 1) % projectImages.length
                            )
                        }
                        imageCaption={projects[photoIndex].description || ""}
                        imageTitle={projects[photoIndex].title || ""}
                    />
                )}
            </Container>
        </section>
    );
};

export default Portfolio;
