### Todo List

**`Function to change the icon of the application at runtime from JavaScript`**<br>
**`Animations (keyframe adapters using transitions)`**<br>
**`Display Grid support`**<br>
**`localStorage support`**<br>
**`global.addEventListener development` [In Progress]**<br>
**`cookies support`**<br>
**`devtools adapter` [In Progress]**<br>
**`responsivity trigger`**<br>
**`EcmaScript arrow functions`**<br>
**`Adapt fetch to promise mode (currently callback)`**<br>

### Done List

**`Title changer (window.setTitle())`**<br>
**`Screen resizer (window.resizeScreen())`**<br>

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

**FLEXBOX (css)** <br>

**`-appkit-display: flex`** To enable the flexbox mode.

### Libraries:

https://github.com/jonathantneal/flexibility - Flexbox Support<br>
https://github.com/petkaantonov/bluebird/ - Promises Alternative Support

