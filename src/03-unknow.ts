let anyVar: any;

anyVar = true;
anyVar = undefined;

let unknowVar: unknown;

unknowVar = true;

// unknowVar.doSomething();

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}
const parse = (str: string): unknown => {
  return JSON.parse(str);
};
