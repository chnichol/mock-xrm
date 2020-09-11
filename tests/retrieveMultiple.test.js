import "@babel/polyfill";
import retrieveMultiple from "../src/retrieveMultiple";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("RetrieveMultiple", () => {
    it("Should return truthy from multiple service", async done => {
        fetch.mockResponses(
            [
                JSON.stringify(
                    {
                        "@odata.context": "https://e2poc.crm9.dynamics.com/api/data/v9.0/$metadata#EntityDefinitions(LogicalName,LogicalCollectionName)", "value": [
                            { "LogicalName": "contact", "LogicalCollectionName": "contacts", "MetadataId": "e995200c-5fe8-4843-8325-80bd2a429d1e" }
                        ]
                    }
                ),
                { status: 200 }
            ],
            [
                JSON.stringify(
                    {
                        "@odata.context": "https://dvagov-vccm-qa.crm9.dynamics.com/api/data/v9.0/$metadata#contacts",
                        "value": [
                            {
                                "ftp_dateofbirth": "19710125"
                            }
                        ]
                    }
                ),
                { status: 200 }
            ]);
            
        retrieveMultiple('contact').then(result => {
            expect(result).toBeTruthy();
            done();
        });
    });
});