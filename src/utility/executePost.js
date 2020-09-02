import { POST } from '../consts';
import executeFetch from './executeFetch';

const executePost = executeFetch(POST);

export default executePost;