module.exports = function() {
    var service = {
        getXmlFromFile: getXmlFromFile
    };
    return service;

    function getXmlFromFile(file) {
        var fs = require('fs');
        var xml = getConfig(file);
        return xml;

        function readXmlFileSync(filepath, encoding) {
            if (typeof (encoding) === 'undefined') {
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return file;
        }

        function getConfig(file) {
            const path = require("path");
            var filepath = path.resolve(__dirname, file);
            return readXmlFileSync(filepath);
        }
    }
};
