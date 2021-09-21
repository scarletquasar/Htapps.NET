global.addEventListener = function(target, event, callback) {
    target[event] = callback;
}
