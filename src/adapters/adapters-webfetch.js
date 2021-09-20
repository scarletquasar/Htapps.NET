var fetch = function(target, attributes) {
    if(!attributes) attributes = {};
    if(!attributes.headers) attributes["headers"] = {};
    if(!attributes.method) attributes["method"] = "GET";
    if(!attributes.body) attributes["body"] = {};

    var resultName = "bind_" + Math.abs(Math.floor(Math.random() * (9 - 999999) + 9)) + Date.now();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            bindGlobals[resultName] = xhr.responseText;
        }
        else {
            console.log(xhr.readyState);
            //Console Log
        }
    }

    Object.entries(attributes.headers).forEach(function(x) {
        xhr.setRequestHeader(x[0], x[1]);
    });
    xhr.open(attributes.method, target);
    xhr.send(JSON.stringify(attributes.body));

    return {
        and: function(callback) {
            ___checkFor(resultName, function(x) {callback(x)});
        }
    }
    
}

//Not Finished