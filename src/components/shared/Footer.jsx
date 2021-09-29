import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <h3>Some Developer</h3>
                <p>
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                    magni eligendi fuga maxime saepe commodi placeat.
                </p>

                <div className="copyright">
                    &copy; Copyright{" "}
                    <strong>
                        <span>Someone</span>
                    </strong>
                    . All Rights Reserved
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
