var keybook = {
    /* SessionStorage */
    store: function(key, content) {
        switch(typeof content) {
            case "string":
                sessionStorage.setItem(key.toString(), JSON.stringify(["string", content]));
                return content;
            case "boolean":
                if(content) sessionStorage.setItem(key.toString(), JSON.stringify(["boolean", 1]));
                else sessionStorage.setItem(key.toString(), JSON.stringify(["boolean", 0]));
                return content;
            case "number":
                sessionStorage.setItem(key.toString(), JSON.stringify(["number", Number(content)]));
                return content;
            case "object":
                sessionStorage.setItem(key.toString(), JSON.stringify(["object", JSON.stringify(content)]));
                return content;
            default:
                return "<Unknown variable type>"
        }
    },

    get: function(key) {
        if(sessionStorage.getItem(key.toString())) {
            try {
                var object = JSON.parse(sessionStorage.getItem(key.toString()));
                switch(object[0]) {
                    case "string":
                        return object[1].toString();
                    case "boolean":
                        if (object[1]) return true;
                        else return false;
                    case "number":
                        return Number(object[1]);
                    case "object":
                        return JSON.parse(object[1]);
                    default:
                        return;
                }
            }
            catch(e) {
                return "<Unknown Error>"
            }
        }
    },

    /* LocalStorage */
    persist: function(key, content) {
        switch(typeof content) {
            case "string":
                localStorage.setItem(key.toString(), JSON.stringify(["string", content]));
                return content;
            case "boolean":
                if(content) localStorage.setItem(key.toString(), JSON.stringify(["boolean", 1]));
                else localStorage.setItem(key.toString(), JSON.stringify(["boolean", 0]));
                return content;
            case "number":
                localStorage.setItem(key.toString(), JSON.stringify(["number", Number(content)]));
                return content;
            case "object":
                localStorage.setItem(key.toString(), JSON.stringify(["object", JSON.stringify(content)]));
                return content;
            default:
                return "<Unknown variable type>"
        }
    },

    fetch: function(key) {
        if(localStorage.getItem(key.toString())) {
            try {
                var object = JSON.parse(localStorage.getItem(key.toString()));

                switch(object[0]) {
                    case "string":
                        return object[1].toString();
                    case "boolean":
                        if (object[1]) return true;
                        else return false;
                    case "number":
                        return Number(object[1]);
                    case "object":
                        return JSON.parse(object[1]);
                    default:
                        return;
                }
            }
            catch(e) {
                return "<Unknown Error>"
            }
        }
    }
}
