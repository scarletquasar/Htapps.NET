/* Document */

document.querySelectorAll = function (selectors) {
    var style = document.createElement('style'), elements = [], element;
    document.documentElement.firstChild.appendChild(style);
    document._qsa = [];

    style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
    window.scrollBy(0, 0);
    style.parentNode.removeChild(style);

    while (document._qsa.length) {
      element = document._qsa.shift();
      element.style.removeAttribute('x-qsa');
      elements.push(element);
    }
    document._qsa = null;
    return elements;
};

document.querySelector = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return (elements.length) ? elements[0] : null;
};

/* Array */
Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

Array.prototype.reduce = function(callback /*, valorInicial*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce chamado é nulo (null) ou indefinido (undefined)');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' não é uma função')
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError('Reduce possui um array vazio sem um valor inicial');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };

Array.prototype.flat = function(depth) {

    'use strict';

    // If no depth is specified, default to 1
    if (depth === undefined) {
        depth = 1;
    }

    // Recursively reduce sub-arrays to the specified depth
    var flatten = function (arr, depth) {

        // If depth is 0, return the array as-is
        if (depth < 1) {
            return arr.slice();
        }

        // Otherwise, concatenate into the parent array
        return arr.reduce(function (acc, val) {
            return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
        }, []);

    };

    return flatten(this, depth);

};