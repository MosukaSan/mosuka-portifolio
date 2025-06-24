import { faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FadeAnimation } from "../interfaces/interfaces";
import { useEffect, type JSX } from "react";

function Contact({ transition, toggleTransition, animDelay }: FadeAnimation): JSX.Element {
    const lnImgLink = 'https://media.licdn.com/dms/image/v2/D4E03AQFxR4cZnCJCiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712314176201?e=1755734400&v=beta&t=BDTdPXdzJm_RTL4TrzuXM8A7NLSEf_VjAhzIebrW3Nk';

    useEffect(() => {
        toggleTransition(true);
    }, []);

    return (
        <main className="flex-1">
            <section className="h-full">
                <div className={`h-full container flex mx-auto space-x-10 items-center transition-opacity ${transition ?  'opacity-100' :  'opacity-0'}`}
                style={{ transitionDuration: `${animDelay}ms` }}>
                    <div className="flex flex-col space-y-7 text-text-light text-5xl font-bold">
                        <div className="flex space-x-4 hover:cursor-pointer">
                            <a href="https://www.linkedin.com/in/lucas-lima-gomes-22695a2b1/" className="hover:text-text-light-hover"><FontAwesomeIcon icon={faLinkedin} className="text-[#0a66c2]"/> Linkedin</a>
                        </div>
                        <div className="flex space-x-4 hover:cursor-pointer">
                            <a href="https://www.instagram.com/lucasligos/" className="hover:text-text-light-hover"><FontAwesomeIcon icon={faInstagramSquare} className="text-[#d200c4]"/> Instagram</a>
                        </div>
                    </div>
                    <div>
                        <img src={lnImgLink} alt="instagram-photo" className="h-30 rounded-full"/>
                    </div>
                </div> 
            </section>
        </main>
    );
}

export default Contact;