import "@babel/polyfill";
import retrieveMetadata from "../src/retrieveMetadata";
global.fetch = require('node-fetch');

describe("RetrieveMetadata", () => {
    it("Should return truthy from metadata service", async done => {
        retrieveMetadata('?$select=LogicalName,LogicalCollectionName').then(result => {
            expect(result).toBeTruthy();
            done();
        });
    });
});