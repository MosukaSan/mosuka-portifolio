export interface FadeAnimation {
    transition: boolean, 
    toggleTransition: (p: boolean) => void,
    animDelay: number
}

export interface FadeAnimationFull {
    transition: boolean, 
    toggleTransition: (p: boolean) => void,
    animDelay: number,
    goTo: (p: string) => void
}

export interface AnimationGoTo {
    goTo: (p: string) => void
}

export interface NavBarProps {
    navActive: boolean,
    toggleNav: (p: boolean) => void
}

export interface NavBarToggle {
    toggleNav: (p: boolean) => void
}