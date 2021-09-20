function ___checkFor(resultName, action) {
    setTimeout(function() {
        if(bindGlobals[resultName] != null) {
            action(bindGlobals[resultName]);
            return;
        }
        else {
            ___checkFor(resultName);
        }
    }, 300);
}

function async(action, preSettedResult) {
    if(!preSettedResult) preSettedResult = null;
    if(!global.config.usePromises) {
        var resultName;
        if(!preSettedResult) {
            resultName = "bind_" + Math.abs(Math.floor(Math.random() * (9 - 999999) + 9)) + Date.now();
        }
        else {
            resultName = preSettedResult;
        }
        
        return {
            then: function(callback) {
                result = action();
                ___checkFor(resultName, callback);
            },

            execute: function() {
                sleepFor(300);
                return action();
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
