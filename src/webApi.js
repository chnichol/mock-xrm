import retrieve from './retrieve';
import create from './create';
import update from './update';
import del from './delete';
import retrieveMultiple from './retrieveMultiple';

const webApi = {
    createRecord: create,
    deleteRecord: del,
    updateRecord: update,
    retrieveRecord: retrieve,
    retrieveMultipleRecords: retrieveMultiple
}

export default webApi;