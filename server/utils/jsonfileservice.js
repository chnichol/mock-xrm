module.exports = function() {
    var service = {
        getJsonFromFile: getJsonFromFile
    };
    return service;

    function getJsonFromFile(file) {
        var fs = require('fs');
        var json = getConfig(file);
        return json;

        function readJsonFileSync(filepath, encoding) {
            if (typeof (encoding) === 'undefined') {
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return JSON.parse(file);
        }

        function getConfig(file) {
            const path = require("path");
            var filepath = path.resolve(__dirname, file);
            return readJsonFileSync(filepath);
        }
    }
};
