/*
    bindGlobals - bindGlobals is a way of storing temporary data that needs a unique naming, 
    it is usually used by built-in asynchronous operators.
*/
var bindGlobals = {};

/*
    global is the object of global application settings, it contains settings and other possible 
    conveniences.
*/
var global = {
    config: {
        time: {
            usePromises: false
        }
    }
}

//console contains all available functionality related to using the development tools console.
console = {
    output: [],
    log: function() {
        var args = Array.from(arguments).toString();
        console.output.push(args);
    },

    error: function() {
        var args = Array.from(arguments).toString();
        console.output.push("[X] Error: " + args);
    },
};

//Setup of important window features for the application's operation.
window.onerror = function(e) {
    console.error(e);
};

window.resizeScreen = function(x, y) {
    if(typeof x != "number") x = 0;
    if(typeof y != "number") y = 0;
    window.external.ResizeScreen(x, y);
}