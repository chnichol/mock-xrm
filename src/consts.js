const LOCALHOST = 'http://localhost:3000';
const WEBAPI = `${typeof(process) === 'object' ? LOCALHOST : ''}/api/data/v9.0`;
const WHOAMI = 'WhoAmI';
const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const CLIENT_URL = location && location.origin;

export { WEBAPI, WHOAMI, GET, POST, PATCH, DELETE, CLIENT_URL };