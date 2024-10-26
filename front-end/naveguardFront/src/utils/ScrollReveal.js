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

export const utilScrollRevealLeft = (ref) => {
    if (ref &&ref.current) {
        ScrollReveal().reveal(ref.current, {
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
            duration: 1000,
            origin: 'right',
            distance: '50px',
            easing: 'ease-in-out',
            reset: false
        })

    }
}
