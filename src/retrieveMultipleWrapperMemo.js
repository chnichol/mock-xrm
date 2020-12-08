import memoize from './utility/memoize';
import retrieveMultipleWrapper from './retrieveMultipleWrapper';

const retrieveMultipleWrapperMemo = memoize(retrieveMultipleWrapper);

export default retrieveMultipleWrapperMemo;