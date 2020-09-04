import memoize from './memoize';
import executeGet from './executeGet';

const whoAmI = memoize(async () => {
    let result = await executeGet('/WhoAmI')();
    return result.json();
});

export default whoAmI;