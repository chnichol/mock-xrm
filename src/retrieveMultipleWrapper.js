import retrieveMultiple from "./retrieveMultiple";
import retrieveMetadataWrapperMemo from "./retrieveMetadataWrapperMemo";
import composePromises from "./utility/composePromises";
import jsonResult from "./utility/jsonResult";

const retrieveMultipleWrapper = (
  entityLogicalName,
  options = "",
  maxpagesize = ""
) =>
  composePromises(
    jsonResult,
    retrieveMultiple(options, maxpagesize),
    retrieveMetadataWrapperMemo
  )(entityLogicalName);

export default retrieveMultipleWrapper;
