import { useState } from "react";
import { useNavigate } from "react-router";
import { FADE_ANIMATION_DELAY } from "../config/animation";

function useFadeTransition(): [boolean, (p: boolean) => void, number, (p: string) => void] {
    const [transition, toggleTransition] = useState(false);
    const [route, setRoute] = useState('')
    const navigate = useNavigate();

    const goTo = (pageToNavigate: string) => {
        if (pageToNavigate != route) {
            toggleTransition(false);
            setTimeout(() => { 
                setRoute(pageToNavigate);
                navigate(pageToNavigate); 
            }, FADE_ANIMATION_DELAY);
        }
    }

    return [transition, toggleTransition, FADE_ANIMATION_DELAY, goTo]
}

export { useFadeTransition };