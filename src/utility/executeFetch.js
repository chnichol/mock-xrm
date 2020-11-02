import { WEBAPI } from "../consts";
import isOnPremises from "./isOnPremises";
import orgUniqueName from "./orgUniqueName";

const executeFetch = (method) => (headers) => (data) => (action) => {
  let orgName = "";
  if (isOnPremises()) {
    orgName = await orgUniqueName();
  }
  return fetch(`${orgName ? '/' + orgName : orgName}${WEBAPI}/${action}`, {
    headers: {
      ...headers,
    },
    method: method,
    body: data && JSON.stringify(data),
  });
};

export default executeFetch;
