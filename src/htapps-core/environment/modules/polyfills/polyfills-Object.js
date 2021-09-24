if (!Object.getPrototypeOf) {
  Object.getPrototypeOf = function (o) {
      if (o !== Object(o)) {
          throw TypeError("Object.getPrototypeOf called on non-object");
      }
      return o.__proto__ || o.constructor.prototype || Object.prototype;
  };
}

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

if(Object.getOwnPropertyDescriptor) {
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
}

if (typeof Object.getOwnPropertyNames !== "function") {
  Object.getOwnPropertyNames = function (o) {
      if (o !== Object(o)) {
          throw TypeError("Object.getOwnPropertyNames called on non-object");
      }
      var props = [],
          p;
      for (p in o) {
          if (Object.prototype.hasOwnProperty.call(o, p)) {
              props.push(p);
          }
      }
      return props;
  };
}

(function () {
  if (!Object.defineProperty ||
      !(function () {
          try {
              Object.defineProperty({}, 'x', {});
              return true;
          }
          catch (e) {
              return false;
          }
      }())) {
      var orig = Object.defineProperty;
      Object.defineProperty = function (o, prop, desc) {
          // In IE8 try built-in implementation for defining properties on DOM prototypes.
          if (orig) {
              try {
                  return orig(o, prop, desc);
              }
              catch (e) {}
          }

          if (o !== Object(o)) {
              throw TypeError("Object.defineProperty called on non-object");
          }
          if (Object.prototype.__defineGetter__ && ('get' in desc)) {
              Object.prototype.__defineGetter__.call(o, prop, desc.get);
          }
          if (Object.prototype.__defineSetter__ && ('set' in desc)) {
              Object.prototype.__defineSetter__.call(o, prop, desc.set);
          }
          if ('value' in desc) {
              o[prop] = desc.value;
          }
          return o;
      };
  }
}());

if (typeof Object.defineProperties !== "function") {
  Object.defineProperties = function (o, properties) {
      if (o !== Object(o)) {
          throw TypeError("Object.defineProperties called on non-object");
      }
      var name;
      for (name in properties) {
          if (Object.prototype.hasOwnProperty.call(properties, name)) {
              Object.defineProperty(o, name, properties[name]);
          }
      }
      return o;
  };
}