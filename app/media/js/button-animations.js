import anime from 'animejs';

// sets up mouse enter/leave handlers for button animations
function buttonAnimations () {
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        // transform
        button.addEventListener('touchstart', buttonAnimation, false);
        button.addEventListener('mouseenter', buttonAnimation, false);
        button.addEventListener('focus', buttonAnimation, false);
        // reset
        button.addEventListener('mouseleave', resetButtonAnimation, false);
        button.addEventListener('touchend', resetButtonAnimation, false);
        button.addEventListener('blur', resetButtonAnimation, false);
    }
}

let outAnimation;
let inAnimation;

function buttonAnimation (event) {
    const { target } = event;

    if (outAnimation) outAnimation.pause();

    inAnimation = anime({
        targets: target,
        scale: 1.15,
        duration: 700,
        borderRadius: 25,
    });
}

function resetButtonAnimation (event) {
    const { target } = event;

    if (inAnimation) inAnimation.pause();

    outAnimation = anime({
        targets: target,
        scale: 1,
        duration: 700,
        borderRadius: 0,
    });
}

module.exports = buttonAnimations;
