import { DELETE } from '../consts';
import executeFetch from './executeFetch';

const executeDelete = executeFetch(DELETE)();

export default executeDelete;