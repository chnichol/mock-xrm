import retrieve from './retrieve';
import create from './create';
import update from './update';
import del from './delete';
import retrieveMultipleWrapper from './retrieveMultipleWrapper';
import online from './online';

const webApi = {
    createRecord: create,
    deleteRecord: del,
    updateRecord: update,
    retrieveRecord: retrieve,
    retrieveMultipleRecords: retrieveMultipleWrapper,
    online: online
}

export default webApi;