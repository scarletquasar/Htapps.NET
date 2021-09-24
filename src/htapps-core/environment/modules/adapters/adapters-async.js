
//Check for a variable in bindGlobals and call a function if exists
function ___checkFor(resultName, action) {
    setTimeout(function() {
        if(bindGlobals[resultName] != null) {
            action(bindGlobals[resultName]);
            return;
        }
        else {
            ___checkFor(resultName, action);
        }
    }, 300);
}

//TODO: Remake async function with Async external .NET provider
