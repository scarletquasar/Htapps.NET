//Setup of important window features for the application's operation.
window.configuration = {
    usePromises: true
}
window.onerror = function(e) {
    console.error(e);
};

window.close = function() {
    window.external.Exit();
}

window.resizeScreen = function(x, y) {
    if(typeof x != "number") x = 0;
    if(typeof y != "number") y = 0;
    window.external.ResizeScreen(x, y);
}

window.setTitle = function(title) {
    if(!title) title = "";
    window.external.SetTitle(title);
}

window.setIcon = function(icon) {
    if(!icon) return;
    window.external.SetIcon(icon);
}

window.setIcon("./environment/favicon.ico");
window.setTitle(document.title);

window.minimizeScreen = function() {
    window.external.MinimizeScreen();
}

window.minimizeScreen = function() {
    window.external.MinimizeScreen();
}

window.lockResize = function(bool) {
    if(bool) {
        window.external.LockResizeScreen();
    }
    else {
        window.external.UnockResizeScreen();
    }
}

window.lockMaximize = function(bool) {
    if(bool) {
        window.external.LockMaximize();
    }
    else {
        window.external.UnockMaximize();
    }
}

window.lockMinimize = function(bool) {
    if(bool) {
        window.external.LockMinimize();
    }
    else {
        window.external.UnockMinimize();
    }
}

window.alert = function(message, title) {
    if(message == undefined) message = " ";
    if(title == undefined) title = " ";
    if(sessionStorage.getItem("$one-time-reload-pattern")) {
        window.external.Alert(message.toString(), title.toString());
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