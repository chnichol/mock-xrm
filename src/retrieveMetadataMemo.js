import memoize from './utility/memoize';
import retrieveMetadata from './retrieveMetadata';

const retrieveMetadataMemo = memoize(retrieveMetadata);

export default retrieveMetadataMemo;