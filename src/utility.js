import globalContext from './globalContext';
import retrieveMetadataWrapperMemo from './retrieveMetadataWrapperMemo';

const utility = {
    closeProgressIndicator: () => {},
    getAllowedStatusTransitions: () => {},
    getEntityMetadata: retrieveMetadataWrapperMemo,
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