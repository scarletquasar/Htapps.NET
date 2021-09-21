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
    }    
};