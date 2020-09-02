const memoize = function(method) {
    let cache = {};

    return async function () {
        let args = JSON.stringify(arguments);
        cache[args] = cache[args] || method.apply(this, arguments);
        return cache[args];
    };
};

export default memoize;