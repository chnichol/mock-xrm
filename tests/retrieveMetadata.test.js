import "@babel/polyfill";
import retrieveMetadata from "../src/retrieveMetadata";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("RetrieveMetadata", () => {
    it("Should return truthy from metadata service", async done => {
        fetch.mockResponseOnce(JSON.stringify(
            {
                "@odata.context": "https://e2poc.crm9.dynamics.com/api/data/v9.0/$metadata#EntityDefinitions(LogicalName,LogicalCollectionName)", "value": [
                    { "LogicalName": "contact", "LogicalCollectionName": "contacts", "MetadataId": "e995200c-5fe8-4843-8325-80bd2a429d1e" }
                ]
            }
        ));

        retrieveMetadata('?$select=LogicalName,LogicalCollectionName').then(result => {
            expect(result).toBeTruthy();
            done();
        });
    });
});