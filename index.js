const receivesAFunction = (cb) => {
    cb();
}

const returnsANamedFunction = () => {
    return function namedFunction() {}
}

const returnsAnAnonymousFunction = () => {
    return function() {}
}