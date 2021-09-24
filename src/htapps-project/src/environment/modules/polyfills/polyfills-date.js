if (!Date.now) {
    Date.now = function now() {
        return Number(new Date());
    };
}

if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = function () {
        function pad2(n) {
            return ('00' + n).slice(-2);
        }
 
        function pad3(n) {
            return ('000' + n).slice(-3);
        }
 
        return this.getUTCFullYear() + '-' +
            pad2(this.getUTCMonth() + 1) + '-' +
            pad2(this.getUTCDate()) + 'T' +
            pad2(this.getUTCHours()) + ':' +
            pad2(this.getUTCMinutes()) + ':' +
            pad2(this.getUTCSeconds()) + '.' +
            pad3(this.getUTCMilliseconds()) + 'Z';
    };
}