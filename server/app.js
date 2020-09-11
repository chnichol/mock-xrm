const express = require('express')
const app = express()

const port = 3000;
const webApiMeta = '/api/data/v9.0';
const webApiAll = '/api/data/v9.0/:entity';
const webApiFirst = /^\/api\/data\/v9\.0\/(?:([^\/]+?))\((?:([^\/]+?))\)\/?$/i;
const orgApi = '/XRMServices/2011/Organization.svc';

const data = '../data/';
const webApiData = data + 'api/data/v9.0/';
const xrmServData = data + 'XRMServices/2011/';

const xmlfileservice = require('./utils/xmlfileservice')();
const jsonfileservice = require('./utils/jsonfileservice')();

app.post(orgApi + '/web', getOrgReqData);
function getOrgReqData(req, res, next) {
    setTimeout(() => {
        try {
            var xml = xmlfileservice.getXmlFromFile(xrmServData + 'new-app-custom-action.xml');
            res.set('Content-Type', 'text/xml');
            res.send(xml);
        }
        catch (e) {
            res.set('Content-Type', 'application/json');
            res.send({ 'ex': e });
        }
    }, 1000);
}

app.get(webApiFirst, getFirstContactData);
function getFirstContactData(req, res, next) {
    setTimeout(() => {
        console.log(req.params);
        var q = req.query;
        try {
            var json = jsonfileservice.getJsonFromFile(webApiData + req.params[0] + '.json');

            res.set('Content-Type', 'application/json');
            var first = {...json.value[0]};
            first['@odata.context'] = json['@odata.context'] + "/$entity";
            res.send(first);
        }
        catch (e) {
            res.set('Content-Type', 'application/json');
            res.send({ 'ex': e });
        }
    }, 1000);
}

app.get(webApiAll, getContactData);
function getContactData(req, res, next) {
    setTimeout(() => {
        console.log(req.params);
        var q = req.query;
        try {
            var json = jsonfileservice.getJsonFromFile(webApiData + req.params.entity + '.json');

            res.set('Content-Type', 'application/json');
            res.send(json);
        }
        catch (e) {
            res.set('Content-Type', 'application/json');
            res.send({ 'ex': e });
        }
    }, 1000);
}

app.get('/ping', function (req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))