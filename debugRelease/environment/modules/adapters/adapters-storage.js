var sessionStorage = {
    setItem: function(key, value) {
        window.external.SessionStorageStore(key, value);
    },

    getItem: function(key) {
        return window.external.SessionStorageGet(key) || null;
    }
}

var localStorage = {
    setItem: function(key, value) {
        window.external.LocalStorageStore(key, value);
    },

    getItem: function(key) {
        return window.external.LocalStorageGet(key) || null;
    }
}