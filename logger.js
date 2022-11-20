'use strict';
var lastDebugLog;
module.exports.logConsoleDebug = function (str) {
    if(str == undefined) return;
    if (lastDebugLog != str) {
        lastDebugLog = str;
        str = str.replace('[', '\x1b[93m['); //Yellow color
        str = str.replace(']', ']\x1b[0m');  //Reset color
        str = str.replace('<@', '\x1b[92m'); //Green color
        str = str.replace('@>', '\x1b[0m');  //Reset color
        str = str.replace('<#', '\x1b[91m'); //Green color
        str = str.replace('#>', '\x1b[0m');  //Reset color
        console.log(str);
    }
}