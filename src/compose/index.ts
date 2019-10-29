const compose = <F extends any[], G, R>(...funcs: F) => (x: G): R => funcs.reduceRight((g, f) => f(g), x);

export default compose;
