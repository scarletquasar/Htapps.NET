var sessionStorage = {
    clear: function() {
        window.external.SessionStorageClear();
    },

    setItem: function(key, value) {
        window.external.SessionStorageStore(key, value);
    },

    getItem: function(key) {
        return window.external.SessionStorageGet(key) || null;
    }
}

var localStorage = {
    clear: function() {
        window.external.LocalStorageClear();
    },

    setItem: function(key, value) {
        window.external.LocalStorageStore(key, value);
    },

    getItem: function(key) {
        return window.external.LocalStorageGet(key) || null;
    }
}