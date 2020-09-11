import memoize from './utility/memoize';
import retrieveMultiple from './retrieveMultiple';

const retrieveMultipleMemo = memoize(retrieveMultple);

export default retrieveMultipleMemo;