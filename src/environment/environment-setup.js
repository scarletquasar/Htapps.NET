var bindGlobals = {};
var global = {
    config: {
        time: {
            usePromises: false,
            dynamicWebFetch: true
        }
    }
}

console = {
    output: [],
    log: function() {
        var args = Array.from(arguments).toString();
        window.console.output.push(args);
    }    
};

function createMethod(name, action) {
    eval(name + " = " + action);
}