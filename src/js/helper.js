export function importAll(obj, requireFunction) {
  requireFunction.keys().forEach(function (key) {
    const propName = key
      .match(/\w+/)[0]
      .replace('_', '')
      .replace(/[A-Z]/, c => c.toLowerCase());

    obj[propName] = requireFunction(key);
  });
}
