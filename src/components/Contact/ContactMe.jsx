import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../shared/SectionTitle";
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
    RiGithubFill,
    RiLinkedinFill,
    RiShareFill,
    RiMailSendFill,
    RiPhoneFill,
} from "react-icons/ri";

import { Fade } from "react-reveal";
const socialLinks = [
    {
        id: 1,
        name: "facebook",
        title: "Facebook",
        link: "https://www.facebook.com/",
        icon: <RiFacebookCircleFill />,
        color: "#3b5998",
    },
    {
        id: 2,
        name: "twitter",
        title: "Twitter",
        link: "https://www.twitter.com/",
        icon: <RiTwitterFill />,
        color: "#1da1f2",
    },
    {
        id: 3,
        name: "instagram",
        title: "Instagram",
        link: "https://www.instagram.com/",
        icon: <RiInstagramFill />,
        color: "#e4405f",
    },
    {
        id: 4,
        name: "github",
        title: "Github",
        link: "https://www.github.com/",
        icon: <RiGithubFill />,
        color: "#333333",
    },
    {
        id: 5,
        name: "linkedin",
        title: "Linkedin",
        link: "https://www.linkedin.com/",
        icon: <RiLinkedinFill />,
        color: "#0077b5",
    },
];

const ContactMe = () => {
    return (
        <section id="contact" className="contact">
            <Container>
                <SectionTitle
                    title="Contact"
                    slogan="Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"
                />

                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <Fade bottom>
                                    <div className="info-box">
                                        <i className="share">
                                            <RiShareFill />
                                        </i>

                                        <h3>Social Profiles</h3>
                                        <div className="social-links">
                                            {socialLinks.map(link => (
                                                <Fade
                                                    bottom
                                                    cascade
                                                    key={link.id}
                                                >
                                                    <a
                                                        href={link.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: link.color,
                                                        }}
                                                    >
                                                        {link.icon}
                                                    </a>{" "}
                                                </Fade>
                                            ))}
                                        </div>
                                    </div>
                                </Fade>
                            </Col>

                            <Col md={6}>
                                <Fade bottom>
                                    <div className="info-box mt-4">
                                        <i className="share">
                                            <RiMailSendFill />
                                        </i>
                                        <h3>Email Me</h3>
                                        <p>contact@example.com</p>
                                    </div>
                                </Fade>
                            </Col>
                            <Col md={6}>
                                <Fade bottom>
                                    <div className="info-box mt-4">
                                        <i className="share">
                                            <RiPhoneFill />
                                        </i>
                                        <h3>Call Me</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactMe;
