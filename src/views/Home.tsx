import {useEffect, type JSX } from "react";
import type { FadeAnimationFull } from "../interfaces/interfaces";

function Home({ transition, toggleTransition, animDelay, goTo }: FadeAnimationFull): JSX.Element {
    useEffect(() => {
        toggleTransition(true);
    }, []);

    return (
        <main className="flex-1">
            <section className="h-full flex justify-center md:justify-between items-center px-3">
                <div className={`text-text-light md:container mx-auto transition-opacity ${transition ?  'opacity-100' :  'opacity-0'}`}
                style={{ transitionDuration: `${animDelay}ms` }}>
                    <h1 className="font-bold text-4xl">OLÁ<span className="text-orange-highlight">!</span></h1>
                    <h1 className="font-bold text-4xl">Me chamo <span className="text-orange-highlight">Lucas Lima</span></h1>
                    <h1 className="font-bold text-4xl">Sou um desenvolvedor<span className="text-orange-highlight">.</span></h1>
                    <div className="flex space-x-10 my-5">
                        <button onClick={() => goTo('/contact')} className="bg-orange-highlight py-2 px-6 rounded font-bold hover:bg-orange-hover hover:cursor-pointer">Contato</button>
                        <button onClick={() => goTo('/experience')} className="border-2 border-orange-highlight py-2 px-6 rounded font-bold hover:text-text-light-hover hover:border-orange-hover hover:cursor-pointer">Experiência Profissional</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;