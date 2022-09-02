export function importAll(obj, requireFunction) {
  requireFunction.keys().forEach(function (key) {
    const propName = key
      .match(/\w+/)[0]
      .replace('_', '')
      .replace(/[A-Z]/, c => c.toLowerCase());

    obj[propName] = requireFunction(key);
  });
}

export const preloadImage = src =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });

export const capitalizeFirstLetter = str =>
  str.replace(/^\w/, c => c.toUpperCase());
