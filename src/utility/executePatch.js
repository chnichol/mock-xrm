import { PATCH } from '../consts';
import executeFetch from './executeFetch';

const executePatch = executeFetch(PATCH);

export default executePatch;