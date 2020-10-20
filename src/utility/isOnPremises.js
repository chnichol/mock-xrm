import { ONLINE_REGEX } from "../consts";

const isOnPremises = () => !ONLINE_REGEX.test(location.href);

export default isOnPremises;