var scrollToElement = require('./scroll-to-element');

// sets up click handlers and consumes scrollToElement on click
function scrollHandler(selector) {
    let elements = document.querySelectorAll(selector);
    for(const element of elements) {
        element.addEventListener('click', function() {
            let menuType = this.dataset.section;
            let container = document.querySelectorAll(`#${ menuType}-container`)[0];
            let title = document.querySelectorAll(`#${ menuType}-title`)[0];

            scrollToElement(title, container);
        }, false);
    }
}

module.exports = scrollHandler;
