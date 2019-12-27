export const pipe = <F extends any[], G, R>(...funcs: F) => (x: G): R =>
  funcs.reduce((g, f) => f(g), x);

export default pipe;
