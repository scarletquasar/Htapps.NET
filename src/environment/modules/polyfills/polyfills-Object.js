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

Object.getOwnPropertyDescriptor = function(object, key) {
  
  var hasSupport =
    typeof object.__lookupGetter__ === 'function' &&
    typeof object.__lookupSetter__ === 'function'
  
  // TODO: How does one determine this?!
  var isGetterSetter = !hasSupport ? null :
    object.__lookupGetter__( key ) ||
    object.__lookupSetter__( key )
  
  return isGetterSetter != null ? {
    configurable: true,
    enumerable: true,
    get: object.__lookupGetter__( key ),
    set: object.__lookupSetter__( key )
  } : {
    configurable: true,
    writable: true,
    enumerable: true,
    value: object[ key ]
  }
  
}

if(!Object.defineProperties) {
  Object.defineProperties = function(obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
  
      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }
  
      if (typeof desc !== 'object' || desc === null)
        throw new TypeError('bad desc');
  
      var d = {};
  
      if (hasProperty(desc, 'enumerable'))
        d.enumerable = !!desc.enumerable;
      if (hasProperty(desc, 'configurable'))
        d.configurable = !!desc.configurable;
      if (hasProperty(desc, 'value'))
        d.value = desc.value;
      if (hasProperty(desc, 'writable'))
        d.writable = !!desc.writable;
      if (hasProperty(desc, 'get')) {
        var g = desc.get;
  
        if (!isCallable(g) && typeof g !== 'undefined')
          throw new TypeError('bad get');
        d.get = g;
      }
      if (hasProperty(desc, 'set')) {
        var s = desc.set;
        if (!isCallable(s) && typeof s !== 'undefined')
          throw new TypeError('bad set');
        d.set = s;
      }
  
      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
        throw new TypeError('identity-confused descriptor');
  
      return d;
    }
  
    if (typeof obj !== 'object' || obj === null)
      throw new TypeError('bad obj');
  
    properties = Object(properties);
  
    var keys = Object.keys(properties);
    var descs = [];
  
    for (var i = 0; i < keys.length; i++)
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
  
    for (var i = 0; i < descs.length; i++)
      Object.defineProperty(obj, descs[i][0], descs[i][1]);
  
    return obj;
  }
}