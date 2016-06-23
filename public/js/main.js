(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var scrollHandler = require('./scroll-handler');

scrollHandler('[js-click=header-nav-item]');

},{"./scroll-handler":2}],2:[function(require,module,exports){
'use strict';

var scrollToElement = require('./scroll-to-element');

// sets up click handlers and consumes scrollToElement on click
function scrollHandler(selector) {
    var elements = document.querySelectorAll(selector);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            element.addEventListener('click', function () {
                var menuType = this.dataset.section;
                var container = document.querySelectorAll('#' + menuType + '-container')[0];
                var title = document.querySelectorAll('#' + menuType + '-title')[0];

                scrollToElement(title, container);
            }, false);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

module.exports = scrollHandler;

},{"./scroll-to-element":3}],3:[function(require,module,exports){
'use strict';

function scrollToElement(element, container) {
    var containerPadding = 0;
    // only compenstate for container top padding if container exists
    if (container) {
        containerPadding = window.getComputedStyle(container).getPropertyValue('padding-top');
        containerPadding = parseInt(containerPadding, 10);
    }
    document.body.scrollTop = element.offsetTop - document.body.offsetTop - element.offsetHeight - containerPadding;
}

module.exports = scrollToElement;

},{}]},{},[1]);
