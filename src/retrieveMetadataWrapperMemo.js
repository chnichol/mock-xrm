import memoize from './utility/memoize';
import retrieveMetadata from './retrieveMetadataWrapper';

const retrieveMetadataWrapperMemo = memoize(retrieveMetadata);

export default retrieveMetadataWrapperMemo;