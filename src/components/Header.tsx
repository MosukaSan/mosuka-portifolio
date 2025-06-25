import type { JSX } from "react";
import type { AnimationGoTo, NavBarToggle } from "../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type NavToggleGo = AnimationGoTo & NavBarToggle;

function Header({ goTo, toggleNav }: NavToggleGo): JSX.Element {
    
    return (
        <header>
            <nav className="container mx-auto flex justify-between items-center py-10 px-3 text-text-light ">
                <button onClick={() => {goTo('/')}} className="font-bold text-3xl hover:cursor-pointer">Lucas Lima</button>
                
                <ul className="hidden lg:flex items-center space-x-5 text-xl">
                    <li><button onClick={() => goTo('/about')} className="hover:text-text-light-hover hover:cursor-pointer">Sobre Mim</button></li>
                    <li><button onClick={() => goTo('/projects')} className="hover:text-text-light-hover hover:cursor-pointer">Projetos Pessoais</button></li>
                    <li><button onClick={() => goTo('/experience')} className="hover:text-text-light-hover hover:cursor-pointer">Experiência Profissional</button></li>
                    <li><button onClick={() => goTo('/contact')} className="hover:text-text-light-hover hover:cursor-pointer">Contato</button></li>
                </ul>

                <button onClick={() => toggleNav(true)} className="block lg:hidden text-2xl hover:text-text-light-hover hover:cursor-pointer"><FontAwesomeIcon icon={faBars}/></button>
            </nav>
        </header>
    );
}

export default Header;