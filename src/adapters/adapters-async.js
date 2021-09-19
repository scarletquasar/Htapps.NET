function async(action, preSettedResult) {
    if(!preSettedResult) preSettedResult = null;
    if(!window.config.usePromises) {
        var result = preSettedResult;
        return {
            then: function(callback) {
                result = action();
                function checkFor() {
                    setTimeout(function() {
                        if(result != null) {
                            callback(result);
                            return async(action, result);
                        }
                        else {
                            checkFor(result);
                        }
                    }, 25);
                }
                checkFor();
            }
        }
    }
    else {
        var promise = new Promise(function(resolve) {
            resolve(callback());
        });
        return promise;
    }
}
