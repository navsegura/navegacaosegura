import ScrollReveal from "scrollreveal";

export const utilScrollReveal = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
            duration: 1000,
            origin: 'bottom',
            distance: '50px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}

export const utilScrollRevealDelayBottom1 = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
            duration: 800,
            origin: 'bottom',
            distance: '100px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}

export const utilScrollRevealDelayBottom2 = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
            duration: 1200,
            origin: 'bottom',
            distance: '100px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}

export const utilScrollRevealDelayBottom3 = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
            duration: 1500,
            origin: 'bottom',
            distance: '100px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}

export const utilScrollRevealLeft = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
            delay: 3000,
            duration: 1000,
            origin: 'left',
            distance: '50px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}

export const utilScrollRevealRight = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
            delay: 3000,
            duration: 1000,
            origin: 'right',
            distance: '50px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}
