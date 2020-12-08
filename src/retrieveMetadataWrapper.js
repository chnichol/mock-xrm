import composePromises from "./utility/composePromises";
import jsonResult from "./utility/jsonResult";
import retrieveMetadata from './retrieveMetadata';

const retrieveMetadataWrapper = (entitylogicalName, attributes = []) => composePromises(jsonResult, retrieveMetadata)(entitylogicalName, attributes);

export default retrieveMetadataWrapper;