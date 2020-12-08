const LOCALHOST = 'http://localhost:3000';
const WEBAPI = `${typeof(process) === 'object' ? LOCALHOST : ''}/api/data/v9.0`;
const WHOAMI = 'WhoAmI';
const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const CLIENT_URL = typeof(location) === 'object' && location.origin;
const ONLINE_REGEX = /[a-zA-Z0-9]*?\.(crm[0-9]*?\.dynamics\.com|crm\.microsoftdynamics\.us)/;

export { WEBAPI, WHOAMI, GET, POST, PATCH, DELETE, CLIENT_URL, ONLINE_REGEX };