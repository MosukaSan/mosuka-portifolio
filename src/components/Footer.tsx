import { faGithub, faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react";

function Footer(): JSX.Element {
    return (
        <footer className="flex justify-center py-6 px-2 bg-background">
            <div className="flex space-x-5 text-3xl text-text-light">
                <a href="https://www.linkedin.com/in/lucas-lima-gomes-22695a2b1/"><FontAwesomeIcon icon={faLinkedin} className="hover:cursor-pointer"/></a>
                <a href="https://github.com/MosukaSan"><FontAwesomeIcon icon={faGithub}  className="hover:cursor-pointer"/></a>
                <a href="https://www.instagram.com/lucasligos/"><FontAwesomeIcon icon={faSquareInstagram} className="hover:cursor-pointer"/></a>
            </div>
        </footer>
    );
}

export default Footer;