### List of adapted features (which don't or can't have polyfill yet)

**GLOBAL** <br>

**`global.addEventListener(target, event, callback)`** Used to attach a property to an html object, it currently does not differentiate between standard properties and events.
<br><br>
**`global.config.time.usePromises`** true/false used to indicate whether asynchronous operations will use the Promises from the "bluebird" library. Default is false.
<br>

**CONSOLE** <br>

**`console.output`** array used to get output from console calls.
<br><br>
**`console.log(...arguments)`** Used to invoke a message on the console.

**WEBFETCH** <br>

**`fetch(target, arguments).and(callback)`** Adaptation of modern fetch API. Currently it doesn't support several "then" but it has as necessary an "and" to handle the answer. Its arguments are the same as conventional fetch.

**SLEEP** <br>

**`sleepFor(time)`** Delay the thread (application) for a while.
