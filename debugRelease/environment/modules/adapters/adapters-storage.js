var sessionStorage = {
    setItem: function(key, value) {
        window.external.SessionStorageStore(key, value);
    },

    getItem: function(key) {
        return window.external.SessionStorageGet(key) || null;
    }
}