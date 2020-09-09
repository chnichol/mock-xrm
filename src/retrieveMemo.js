import memoize from './utility/memoize';
import retrieve from './retrieve';

const retrieveMemo = memoize(retrieve);

export default retrieveMemo;