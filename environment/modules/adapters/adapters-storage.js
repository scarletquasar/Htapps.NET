var sessionStorage = {
    setItem: function(key, value) {
        window.external.SessionStorageStore(key, value);
    },

    getItem: function(key) {
        window.external.SessionStorageGet(key);
    }
}