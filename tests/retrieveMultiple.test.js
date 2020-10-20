import "@babel/polyfill";
import retrieveMultiple from "../src/retrieveMultiple";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("RetrieveMultiple", () => {
  it("Should return truthy from multiple service", async (done) => {
    const url = "https://somedyn.crm9.dynamics.com/";
    global.location = {
      href: url,
    };
    fetch.mockResponses(
      [
        JSON.stringify({
          "@odata.context":
            "https://somedyn.crm9.dynamics.com/api/data/v9.0/$metadata#Microsoft.Dynamics.CRM.RetrieveEntityResponse",
          EntityMetadata: {
            LogicalCollectionName: "contacts",
          },
        }),
        { status: 200 },
      ],
      [
        JSON.stringify({
          "@odata.context":
            "https://dvagov-vccm-qa.crm9.dynamics.com/api/data/v9.0/$metadata#contacts",
          value: [
            {
              ftp_dateofbirth: "19710125",
            },
          ],
        }),
        { status: 200 },
      ]
    );

    retrieveMultiple("contact").then((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
