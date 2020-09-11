import "@babel/polyfill";
import retrieveMultiple from "../src/retrieveMultiple";
global.fetch = require('node-fetch');

describe("RetrieveMultiple", () => {
    it("Should return truthy from multiple service", async done => {
        retrieveMultiple('contact').then(result => {
            expect(result).toBeTruthy();
            done();
        });
    });
});