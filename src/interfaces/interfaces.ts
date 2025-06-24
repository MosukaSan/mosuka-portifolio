export interface FadeAnimation {
    transition: boolean, 
    toggleTransition: (p: boolean) => void,
    animDelay: number
}

export interface AnimationGoTo {
    goTo: (p: string) => void
}

export interface FadeAnimationFull {
    transition: boolean, 
    toggleTransition: (p: boolean) => void,
    animDelay: number,
    goTo: (p: string) => void
}
