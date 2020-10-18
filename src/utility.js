import globalContext from './globalContext';
import retrieveMetadata from './retrieveMetadataMemo';

const utility = {
    closeProgressIndicator: () => {},
    getAllowedStatusTransitions: () => {},
    getEntityMetadata: retrieveMetadata,
    getGlobalContext: globalContext,
    getLearningPathAttributeName: () => {},
    getPageContext: () => {},
    getResourceString: () => {},
    invokeProcessAction: () => {},
    lookObjects: () => {},
    refreshParentGrid: () => {},
    showProgressIndicator: () => {}
}

export default utility;