import { Col, Row } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { Fade } from "react-reveal";

const AboutData = () => {
    return (
        <Row>
            <Col lg={6}>
                <ul>
                    <Fade bottom cascade>
                        <li>
                            <BiChevronRight />
                            <strong>Name:</strong>
                            <span>Some Developer</span>
                        </li>
                        <li>
                            <BiChevronRight />
                            <strong>Website:</strong>
                            <span>
                                <a
                                    href="http://www.example.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    www.example.app
                                </a>
                            </span>
                        </li>
                        <li>
                            <BiChevronRight />
                            <strong>Phone:</strong>
                            <span>+123 456 7890</span>
                        </li>
                        <li>
                            <BiChevronRight />
                            <strong>City:</strong>
                            <span>New York, USA</span>
                        </li>
                    </Fade>
                </ul>
            </Col>

            <Col lg={6}>
                <ul>
                    <Fade cascade bottom>
                        <li>
                            {" "}
                            <BiChevronRight /> <strong>Age:</strong>{" "}
                            <span>30</span>
                        </li>
                        <li>
                            {" "}
                            <BiChevronRight /> <strong>Degree:</strong>{" "}
                            <span>Masters</span>
                        </li>
                        <li>
                            {" "}
                            <BiChevronRight /> <strong>Email:</strong>{" "}
                            <span>email@example.com</span>
                        </li>
                        <li>
                            <BiChevronRight />
                            <strong>Freelance:</strong>
                            <span>Available</span>
                        </li>
                    </Fade>
                </ul>
            </Col>
        </Row>
    );
};

export default AboutData;
