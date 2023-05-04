function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return function snow () {};
}

function returnsAnAnonymousFunction() {
    return function() {}
}
