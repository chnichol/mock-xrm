import queryStringValueProvider from "./utility/queryStringValueProvider";
import retrieveMemo from "./retrieveMemo";

const getCurrentAppName = async () => {
  let appid = queryStringValueProvider("appid");
  return (
    (appid && (await retrieveMemo("appmodule", appid, "?$select=name"))).name ||
    ''
  );
};

export default getCurrentAppName;