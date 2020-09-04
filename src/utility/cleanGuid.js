import pipe from './pipe';
import stringReplace from './stringReplace';

const cleanGuid = pipe(stringReplace(/\{|\}/gi)(''));

export default cleanGuid;