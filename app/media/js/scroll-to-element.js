function scrollToElement(element) {
    // get padding-top of content wrapper it's accounting for the fixed header
    const scrollContainer = document.querySelectorAll('.content')[0];
    let containerPadding = window.getComputedStyle(scrollContainer).getPropertyValue('padding-top');
    containerPadding = parseInt(containerPadding, 10);

    var scrollElement = document.scrollingElement || document.documentElement;
    scrollElement.scrollTop = element.offsetTop - containerPadding;
}

module.exports = scrollToElement;
