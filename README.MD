<h1>Htapps</h1>
Htapps is a HTML/CSS/JS provider to ease the development of simple applications that can run as windows programs. Currently in <b>Alpha 1.1.0</b>.
You can check <b>CHANGELOG.MD</b> for more informations.
<br>
<h2>Usage</h2>
To get started in the Htapps development you can clone the repository and go to <b>/src/htapps-project/</b>.
In the folder it is possible to change the entire content of "src" and when the project is finished, just run the build command that is at the root of the project, the result will be in the output folder.
<br>
<i>Note: The current version is a development version, in the future there will be a special CLI environment to control the build.</i>
<h2>Features</h2>
Currently the Htapps runtime environment supports most of the modern functionality of JavaScript ES5+ and some CSS3 features. It's possible to check all the current features in the tables below:
<br><br>
<b>JavaScript</b>
<br><br>
<table>
  <tr>
    <td>Feature</td>
    <td>Usability State</td>
    <td>Added in version</td>
    <td>Deprecated?</td>
  </tr>
  <tr>
    <td>window.fetch API</td>
    <td>Working with limitations</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Function.prototype.bind</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>ES5+ Object/Date/String Management</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>document.querySelector/querySelectorAll</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>AddEventListener API</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>String.json</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>JSON.parse/stringify</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
  <tr>
    <td>local/sessionStorage</td>
    <td>Working Properly</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
</table>
<br><br>
<b>CSS</b>
<br><br>
<table>
  <tr>
    <td>Feature</td>
    <td>Usability State</td>
    <td>Added in version</td>
    <td>Deprecated?</td>
  </tr>
  <tr>
    <td>Flexbox (display: flex | -appkit-display: flex)</td>
    <td>Working with limitations</td>
    <td>Alpha</td>
    <td>No</td>
  </tr>
</table>
<br>
<h2>Htapps environment functions</h2>

<table>
  <tr>
    <td>Name</td>
    <td>Arguments</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>window.close</td>
    <td>-</td>
    <td>Finishes the application</td>
  </tr>
  <tr>
    <td>window.setIcon</td>
    <td>string: path</td>
    <td>Changes the application icon</td>
  </tr>
  <tr>
    <td>window.setTitle</td>
    <td>string: title</td>
    <td>Changes the application title</td>
  </tr>
  <tr>
    <td>window.resizeScreen</td>
    <td>int: x, int: y</td>
    <td>Defines if resize is enabled in the application</td>
  </tr>
   <tr>
    <td>window.lockResize</td>
    <td>bool: lock?</td>
    <td>Defines if resize is enabled in the application</td>
  </tr>
  <tr>
    <td>window.minimizeScreen</td>
    <td>-</td>
    <td>Minimize the application screen</td>
  </tr>
  <tr>
    <td>window.maximizeScreen</td>
    <td>-</td>
    <td>Maximize the application screen</td>
  </tr>
  <tr>
    <td>window.lockMaximize</td>
    <td>bool: lock?</td>
    <td>Defines if maximize option is enabled in the application</td>
  </tr>
  <tr>
    <td>window.lockMinimize</td>
    <td>bool: lock?</td>
    <td>Defines if minimize option is enabled in the application</td>
  </tr>
  <tr>
    <td>window.alert</td>
    <td>string: message?, string: title?</td>
    <td>Shows a message box in the screen</td>
  </tr>
  <tr>
    <td>window.console.output[]</td>
    <td>-</td>
    <td>Returns the current console output</td>
  </tr>
  <tr>
    <td>window.console.log</td>
    <td>args[string...]</td>
    <td>Create a log instance in the console</td>
  </tr>
  <tr>
    <td>window.console.error</td>
    <td>args[string...]</td>
    <td>Create an error instance in the console</td>
  </tr>
  <tr>
    <td>use</td>
    <td>string: [/environment/+path]</td>
    <td>Import a script dinamically</td>
  </tr>
  <tr>
    <td>useStyle</td>
    <td>string: [/environment/+path]</td>
    <td>Import a css file dinamically</td>
  </tr>
</table>
<br>
<h2>TODO [v1.2+]</h2>
-> Hardcode polyfills in .NET modules to improve performance and other factors.<br>
-> Make an object scripting API to access various features of .NET environment<br>
-> Make an system management API to access Windows features and management (authorized mode)<br>
-> Decent Display Flex Support (currently working with problems)<br>
-> Display Grid Support<br>
-> Make example applications to show the usage of HTAPPS
<br>
<h2>External Libraries</h2>
https://github.com/jonathantneal/flexibility - Flexbox Support<br>
https://github.com/petkaantonov/bluebird - Promises Support
