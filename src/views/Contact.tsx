import { faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FadeAnimation } from "../interfaces/interfaces";
import { useEffect, type JSX } from "react";

function Contact({ transition, toggleTransition, animDelay }: FadeAnimation): JSX.Element {
    
    useEffect(() => {
        toggleTransition(true);
    }, []);

    return (
        <main className="flex-1">
            <section className="h-full">
                <div className={`h-full container flex flex-col md:flex-row mx-auto space-y-10 md:space-x-10 justify-center md:justify-start items-center transition-opacity ${transition ?  'opacity-100' :  'opacity-0'}`}
                style={{ transitionDuration: `${animDelay}ms` }}>
                    <div className="flex flex-col space-y-7 text-text-light text-5xl font-bold">
                        <div className="flex space-x-4 hover:cursor-pointer">
                            <a href="https://www.linkedin.com/in/lucas-lima-gomes-22695a2b1/" className="hover:text-text-light-hover"><FontAwesomeIcon icon={faLinkedin} className="text-[#0a66c2]"/> Linkedin</a>
                        </div>
                        <div className="flex space-x-4 hover:cursor-pointer">
                            <a href="https://www.instagram.com/lucasligos/" className="hover:text-text-light-hover"><FontAwesomeIcon icon={faInstagramSquare} className="text-[#d200c4]"/> Instagram</a>
                        </div>
                    </div>
                </div> 
            </section>
        </main>
    );
}

export default Contact;