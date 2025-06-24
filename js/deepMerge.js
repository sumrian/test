function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return deepMerge(target, ...sources);
}

function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

const obj = { a: { f: 3, b: { c: 5, d: 1 } } };
const obj1 = {};
const mergedObj = deepMerge(obj1, obj, { a: { b: { d: 6 } } });

console.log(obj);  // 输出: { a: { f: 3, b: { c: 5, d: 1 } } }
console.log(mergedObj);  // 输出: { a: { f: 3, b: { c: 5, d: 6 } } }
