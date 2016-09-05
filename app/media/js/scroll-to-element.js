function scrollToElement(element, container) {
    let containerPadding = 0;
    containerPadding = window.getComputedStyle(container).getPropertyValue('padding-top');
    containerPadding = parseInt(containerPadding, 10);

    document.body.scrollTop = element.offsetTop - document.body.offsetTop - element.offsetHeight - containerPadding;
}

module.exports = scrollToElement;
