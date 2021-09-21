var bindGlobals = {};
var global = {
    bodyCache: "",
    config: {
        time: {
            usePromises: false
        }
    }
}

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

window.onerror = function(e) {
    console.error(e);
};