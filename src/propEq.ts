import prop from './prop';

const propEq: (
  value: StringNumberBoolean
) => (path: string) => (obj: any) => boolean = function(value) {
  return path => obj => prop(path)(obj) === value;
};

type StringNumberBoolean = string | number | boolean;

