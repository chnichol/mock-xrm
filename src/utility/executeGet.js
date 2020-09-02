import { GET } from '../consts';
import executeFetch from './executeFetch';

const executeGet = executeFetch(GET)();

export default executeGet;