import memoize from './utility/memoize';
import retrieveMetadata from './retrieveMetadataWrapper';

const retrieveMetadataMemo = memoize(retrieveMetadata);

export default retrieveMetadataMemo;