import { Col, Container, Row } from "react-bootstrap";
import CountBox from "../shared/CountBox";
import SectionTitle from "../shared/SectionTitle";
import AboutData from "./AboutData";
import { FiSmile } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Progress from "./Progress";
import { skillsData } from "../../assets/data/aboutData";

const About = () => {
    return (
        <section id="about" className="about">
            <Container>
                <SectionTitle
                    title="About Me"
                    slogan="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ipsum! "
                />

                <Row>
                    <Col
                        lg={4}
                        className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                    />

                    <Col
                        lg={8}
                        className="d-flex flex-column align-items-stretch mt-4"
                    >
                        <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                            <AboutData />

                            <Row className="mt-5">
                                <Col
                                    md={6}
                                    className="mt-5 d-md-flex align-items-md-stretch"
                                >
                                    <CountBox
                                        icon={<FiSmile />}
                                        count={100}
                                        color="#20b38e"
                                        description="Happy Clients"
                                    />
                                </Col>

                                <Col
                                    md={6}
                                    className="mt-5 d-md-flex align-items-md-stretch"
                                >
                                    <CountBox
                                        icon={<AiOutlineFundProjectionScreen />}
                                        count={500}
                                        color="#f5b642"
                                        description="Projects Completed"
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className="skills-content ps-lg-4">
                            {skillsData.map(data => (
                                <Progress
                                    key={data.id}
                                    value={data.value}
                                    name={data.name}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
