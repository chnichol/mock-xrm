import "@babel/polyfill";
import retrieveMetadata from "../src/retrieveMetadataWrapper";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("RetrieveMetadata", () => {
  it("Should return truthy from metadata service", async (done) => {
    const url = "https://somedyn.crm9.dynamics.com/";
    global.location = {
      href: url,
    };

    fetch.mockResponseOnce(
      JSON.stringify({
        "@odata.context":
          "https://somedyn.crm9.dynamics.com/api/data/v9.0/$metadata#Microsoft.Dynamics.CRM.RetrieveEntityResponse",
        EntityMetadata: {
          LogicalCollectionName: "contacts",
        },
      })
    );

    retrieveMetadata("?$select=LogicalName,LogicalCollectionName").then(
      (result) => {
        expect(result).toBeTruthy();
        done();
      }
    );
  });
});
