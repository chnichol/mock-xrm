import retrieve from './retrieve';
import create from './create';
import update from './update';
import del from './delete';
import retrieveMultiple from './retrieveMultiple';
import online from './online';

const webApi = {
    createRecord: create,
    deleteRecord: del,
    updateRecord: update,
    retrieveRecord: retrieve,
    retrieveMultipleRecords: retrieveMultiple,
    online: online
}

export default webApi;