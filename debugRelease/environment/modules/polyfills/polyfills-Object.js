if (!Object.keys) {
    Object.keys = (function() {
      'use strict';
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
          dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          dontEnumsLength = dontEnums.length;
  
      return function(obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
          throw new TypeError('Object.keys chamado de non-object');
        }
  
        var result = [], prop, i;
  
        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }
  
        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
}

if(!Object.entries) {
    Object.entries = function(object) {
        var result = [];
        Object.keys(object).forEach(function(n) {
            result.push([n, object[n]]);
        });
        return result;
    }
}

if (!Object.assign) {
    Object.assign = function() {
        var result = {};
        Array.from(arguments).forEach(function(x) {
            Object.keys(x).forEach(function(n) {
                result[n] = x[n];
            });
        });
        return result;
    }
}

if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Temp = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if (typeof prototype != 'object') {
        throw TypeError('Argument must be an object');
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}

if(!Object.values) {
  Object.values = function (obj) {
    return Object.keys(obj).map(function (e) {
        return obj[e];
    });
  };
}

if (!Object.is) {
  Object.is = function(x, y) {
    // Algoritmo para verificar se os valores sao iguais
    if (x === y) { // Passos 1-5, 7-10
      // Passos 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Passo 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}