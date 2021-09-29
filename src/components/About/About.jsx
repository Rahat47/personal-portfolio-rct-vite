import { Col, Container, Row } from "react-bootstrap";
import CountBox from "../shared/CountBox";
import SectionTitle from "../shared/SectionTitle";
import AboutData from "./AboutData";
import { FiSmile } from "react-icons/fi";
import { AiFillHtml5, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import Progress from "./Progress";
import FadeIn from "react-fade-in";

const skillsData = [
    {
        id: 1,
        name: "HTML",
        percentage: "90%",
        color: "#f5b642",
        value: 90,
        icon: <AiFillHtml5 />,
    },
    {
        id: 2,
        name: "CSS",
        percentage: "95%",
        color: "#264de4",
        value: 95,
        icon: <IoLogoCss3 />,
    },
    {
        id: 3,
        name: "JavaScript",
        percentage: "85%",
        color: "#f5b642",
        value: 85,
        icon: <IoLogoJavascript />,
    },
    {
        id: 4,
        name: "Node js",
        percentage: "80%",
        color: "#264de4",
        value: 80,
        icon: <IoLogoNodejs />,
    },
];

const About = () => {
    return (
        <section id="about" className="about">
            <Container>
                <FadeIn delay={300}>
                    <SectionTitle
                        title="About Me"
                        slogan="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ipsum! "
                    />
                </FadeIn>

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
                                    <FadeIn>
                                        <CountBox
                                            icon={<FiSmile />}
                                            count={100}
                                            color="#20b38e"
                                            description="Happy Clients"
                                        />
                                    </FadeIn>
                                </Col>

                                <Col
                                    md={6}
                                    className="mt-5 d-md-flex align-items-md-stretch"
                                >
                                    <FadeIn>
                                        <CountBox
                                            icon={
                                                <AiOutlineFundProjectionScreen />
                                            }
                                            count={500}
                                            color="#f5b642"
                                            description="Projects Completed"
                                        />
                                    </FadeIn>
                                </Col>
                            </Row>
                        </div>

                        <div className="skills-content ps-lg-4">
                            {skillsData.map(data => (
                                <FadeIn key={data.id} delay={300}>
                                    <Progress
                                        value={data.value}
                                        name={data.name}
                                        icon={data.icon}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
