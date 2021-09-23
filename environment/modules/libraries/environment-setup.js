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

//Setup of important window features for the application's operation.
window.onerror = function(e) {
    console.error(e);
};

window.resizeScreen = function(x, y) {
    if(typeof x != "number") x = 0;
    if(typeof y != "number") y = 0;
    window.external.ResizeScreen(x, y);
}

window.setTitle = function(title) {
    if(!title) title = "";
    window.external.SetTitle(title);
}

window.setTitle(document.title);

window.alert = function(message, title) {
    if(!message) message = " ";
    if(!title) title = " ";
    if(sessionStorage.getItem("$one-time-reload-pattern")) {
        window.external.Alert(message, title);
    }
}

//console contains all available functionality related to using the development tools console.
window.console = {
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