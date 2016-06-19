function scrollToElement(element, container) {
    var containerPadding = 0;
    // only compenstate for container top padding if container exists
    if(container) {
        containerPadding = window.getComputedStyle(container).getPropertyValue('padding-top');
        containerPadding = parseInt(containerPadding, 10);
    }
    document.body.scrollTop = element.offsetTop - document.body.offsetTop - element.offsetHeight - containerPadding;
}

module.exports = scrollToElement;
