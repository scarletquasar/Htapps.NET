if(!Array.prototype.forEach) {
  Array.prototype.forEach = function forEach( callback, thisArg ) {
      var T, k;

      if ( this == null ) {
        throw new TypeError( "this is null or not defined" );
      }

      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0; // Hack to convert O.length to a UInt32

      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if ( {}.toString.call(callback) !== "[object Function]" ) {
        throw new TypeError( callback + " is not a function" );
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if ( thisArg ) {
        T = thisArg;
      }

      // 6. Let k be 0
      k = 0;

      // 7. Repeat, while k < len
      while( k < len ) {

        var kValue;

        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if ( Object.prototype.hasOwnProperty.call(O, k) ) {

          // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
          kValue = O[ k ];

          // ii. Call the Call internal method of callback with T as the this value and
          // argument list containing kValue, k, and O.
          callback.call( T, kValue, k, O );
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisp */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      var res = [];
      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
          if (i in t) {
              var val = t[i]; // in case fun mutates this
              if (fun.call(thisp, val, i, t)) {
                  res.push(val);
              }
          }
      }

      return res;
  };
}

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (fun /*, initialValue */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      // no value to return if no initial value and an empty array
      if (len === 0 && arguments.length === 1) {
          throw TypeError();
      }

      var k = 0;
      var accumulator;
      if (arguments.length >= 2) {
          accumulator = arguments[1];
      }
      else {
          do {
              if (k in t) {
                  accumulator = t[k++];
                  break;
              }

              // if array contains no values, no initial value to return
              if (++k >= len) {
                  throw TypeError();
              }
          }
          while (true);
      }

      while (k < len) {
          if (k in t) {
              accumulator = fun.call(undefined, accumulator, t[k], k, t);
          }
          k++;
      }

      return accumulator;
  };
}

if(!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    //  1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

if(!Array.isArray) {
  Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }

      var n = len;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n !== n) {
              n = 0;
          }
          else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }

      var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);

      for (; k >= 0; k--) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  };
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }

      var n = 0;
      if (arguments.length > 0) {
          n = Number(arguments[1]);
          if (isNaN(n)) {
              n = 0;
          }
          else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }

      if (n >= len) {
          return -1;
      }

      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  };
}

if (!Array.prototype.every) {
  Array.prototype.every = function (fun /*, thisp */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
          if (i in t && !fun.call(thisp, t[i], i, t)) {
              return false;
          }
      }

      return true;
  };
}

if(!Array.prototype.reduce) {
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
}

if(Array.prototype.flat) {
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
}

if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callbackfn /*, initialValue */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof callbackfn !== "function") {
          throw TypeError();
      }

      // no value to return if no initial value, empty array
      if (len === 0 && arguments.length === 1) {
          throw TypeError();
      }

      var k = len - 1;
      var accumulator;
      if (arguments.length >= 2) {
          accumulator = arguments[1];
      }
      else {
          do {
              if (k in this) {
                  accumulator = this[k--];
                  break;
              }

              // if array contains no values, no initial value to return
              if (--k < 0) {
                  throw TypeError();
              }
          }
          while (true);
      }

      while (k >= 0) {
          if (k in t) {
              accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
          }
          k--;
      }

      return accumulator;
  };
}

if (!Array.prototype.some) {
  Array.prototype.some = function (fun /*, thisp */ ) {
      if (this === void 0 || this === null) {
          throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
          throw TypeError();
      }

      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
          if (i in t && fun.call(thisp, t[i], i, t)) {
              return true;
          }
      }

      return false;
  };
}

if (!Array.prototype.push) {
  // Check if not already supported, then only add. No need to check this when you want to Override the method
  
      // Add method to prototype of array, so that can be directly called on array
      Array.prototype.push = function() {
  
          // Use loop for multiple/any no. of elements
          for (var i = 0; i < arguments.length; i++) {
              this[this.length] = arguments[i];
          }
  
  
          // Return new length of the array
          return this.length;
      };
}

if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}