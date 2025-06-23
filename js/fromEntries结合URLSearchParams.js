const url = 'https://www.google.com/search?q=123';
const urlSearchParams = new URLSearchParams(url);
console.log(Map instanceof Object); // true
console.log(urlSearchParams instanceof Object); // true
console.log(urlSearchParams instanceof Map); // false URLSearchParams实例对象不是map
const getUrlParams = url => Object.fromEntries(urlSearchParams) // {q : 123}