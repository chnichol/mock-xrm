import "@babel/polyfill";
import composeM from "../../src/utility/composeM";

describe("composeM", () => {
  it("Can compose promise chain", async (done) => {
    const composePromises = composeM("then");
    const label = "API call composition";
    const getUserById = (id) => id === 3 ? Promise.resolve({ name: "Kurt", role: "Author" }) : undefined;
    const hasPermission = ({ role }) => Promise.resolve(role === "Author");

    const authUser = composePromises(hasPermission, getUserById);
    authUser(3).then((result)=>{debugger; done()});
  });
});
