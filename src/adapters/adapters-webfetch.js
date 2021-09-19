var fetch = function(target, attributes = {}) {
    if(!attributes.method) attributes["method"] = "GET";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
        else {
            console.log(xhr.readyState);
        }
    }
    xhr.open(attributes.method, "https://jsonplaceholder.typicode.com/todos/1");
    xhr.send(null);
}