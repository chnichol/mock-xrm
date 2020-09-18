const composeM = chainMethod => (...ms) => (ms.reduce((f, g) => x => g(x)[chainMethod](f)));

export default composeM;