window.console = {
    output: [],
    log: function() {
        var args = Array.from(arguments).toString();
        window.console.output.push(args);
    }    
};

window.config = {
    async: {
        usePromises: false
    }
}