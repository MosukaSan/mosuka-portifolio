import { useEffect, type JSX } from "react";
import type { FadeAnimation } from "../interfaces/interfaces";

function About({ transition, toggleTransition, animDelay }: FadeAnimation): JSX.Element {

    useEffect(() => {
        toggleTransition(true);
    }, []);

    return (
        <main className="bg-background md:flex-1">
            <div className={`text-text-light h-full px-3 py-10 container mx-auto flex flex-col justify-center space-y-18 transition-opacity ${transition ?  'opacity-100' :  'opacity-0'}`}
            style={{ transitionDuration: `${animDelay}ms` }}>
                <section>
                    <h2 className="font-bold text-2xl">Sobre mim</h2>
                    <p className="text-justify">
                        Me chamo Lucas Lima e tenho 17 anos! Sou um entusiasta da tecnologia, me apaixono por essa área desde criança e
                        estou na área há mais ou menos <strong>1 ano e meio</strong>. Programo tanto por hobbie quanto profissionalmente, tenho alguns projetos bem
                        interessantes e também já fiz algumas soluções para pequenas empresas.
                    </p>
                </section>
                <section className="flex flex-col space-y-6">
                    <h2 className="font-bold text-2xl text-center">Tecnologias que eu utilizo</h2>
                    <div className="flex flex-col md:flex-row items-center md:justify-center md:items-start space-y-10 md:space-x-10 font-bold text-xl">
                        <div className="flex flex-col items-center md:items-start"> 
                            <h3>Front-End</h3>
                            <h4 className="font-normal">A tríade: </h4>
                            <img src="https://skillicons.dev/icons?i=html,css,js" alt="basic front-end technologies" />
                            <h4 className="font-normal mt-2">Frameworks: </h4>
                            <img src="https://skillicons.dev/icons?i=vite,react,tailwind,ts" alt="frameworks" />
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h3>Back-End</h3>
                            <img src="https://skillicons.dev/icons?i=java,python,nodejs" alt="back-end technologies" className="mt-2"/>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h3>Banco de dados</h3>
                            <img src="https://skillicons.dev/icons?i=mysql,mongodb,firebase" alt="back-end technologies" className="mt-2"/>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h3>Mobile</h3>
                            <img src="https://skillicons.dev/icons?i=androidstudio,java,kotlin" alt="back-end technologies" className="mt-2"/>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h3>Jogos</h3>
                            <img src="https://skillicons.dev/icons?i=unity,cs" alt="back-end technologies" className="mt-2"/>
                            <img src="https://skillicons.dev/icons?i=robloxstudio,lua" alt="back-end technologies" className="mt-2"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About;