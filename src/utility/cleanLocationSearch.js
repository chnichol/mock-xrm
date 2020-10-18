import pipe from './pipe';
import stringReplace from './stringReplace';

const cleanLocationSearch = pipe(stringReplace(/^\?/)(''));

export default cleanLocationSearch;