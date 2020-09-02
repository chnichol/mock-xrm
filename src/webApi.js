import retrieve from './utility/retrieve';
import create from './utility/create';
import update from './utility/update';
import del from './utility/delete';
import retrieveMultiple from './utility/retrieveMultiple';

const webApi = {
    createRecord: create,
    deleteRecord: del,
    updateRecord: update,
    retrieveRecord: retrieve,
    retrieveMultipleRecords: retrieveMultiple
}

export default webApi;