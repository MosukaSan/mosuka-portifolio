import { useEffect, useState, type JSX } from "react";
import type { AnimationGoTo, NavBarProps } from "../interfaces/interfaces";
import { NAVBAR_ANIMATION_DELAY } from "../config/animation";

type NavGo = NavBarProps & AnimationGoTo;

function NavBar({ navActive, toggleNav, goTo }: NavGo): JSX.Element {
    const [transition, toggleTransition] = useState(false);

    useEffect(() => {
        if (navActive) {
            requestAnimationFrame(() => {
                toggleTransition(true);
            });
        }
    }, [navActive]);

    const disabeNav = () => {
        toggleTransition(false);
        setTimeout(() => {
            toggleNav(false);
        }, NAVBAR_ANIMATION_DELAY);
    };

    return (
        <div className={`flex w-screen h-screen fixed z-999 ${navActive ? 'translate-x-0' : 'translate-x-full'}`}>
            <div onClick={disabeNav} className="w-screen h-screen fixed"></div>
            <div className={`bg-dark-contrast absolute right-0 h-full p-6 transform transition-transform ${transition ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transitionDuration: `${NAVBAR_ANIMATION_DELAY}ms` }}>
                <nav className="mt-10">
                    <ul className="flex flex-col items-center space-y-10 text-xl text-text-light">
                        <li><button onClick={() => { goTo('/about'); disabeNav(); }} className="hover:text-text-light-hover hover:cursor-pointer">Sobre Mim</button></li>
                        <li><button onClick={() => { goTo('/projects'); disabeNav(); }} className="hover:text-text-light-hover hover:cursor-pointer">Projetos Pessoais</button></li>
                        <li><button onClick={() => { goTo('/experience'); disabeNav(); }} className="hover:text-text-light-hover hover:cursor-pointer">Experiência Profissional</button></li>
                        <li><button onClick={() => { goTo('/contact'); disabeNav(); }} className="hover:text-text-light-hover hover:cursor-pointer">Contato</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;