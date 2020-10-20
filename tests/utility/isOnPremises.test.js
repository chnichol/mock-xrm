import "@babel/polyfill";
import isOnPremises from "../../src/utility/isOnPremises";

describe("isOnPremises", () => {
  it("https://somedyn.crm9.dynamics.com/ should be false", async (done) => {
    const url = "https://somedyn.crm9.dynamics.com/";
    global.location = {
      href: url,
    };

    expect(isOnPremises()).toEqual(false);
    done();
  });

  it("http://someonprem/someorg/ should be true", async (done) => {
    const url = "http://someonprem/someorg/";
    global.location = {
      href: url,
    };

    expect(isOnPremises()).toEqual(true);
    done();
  });
});
