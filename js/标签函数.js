// 模版字符串的本质是一个标签函数
const fn = (Strings,...args) => {
    console.log(Strings);
    console.log(args);
    let result = Strings[0]
    for (let i = 0; i < args.length; i++) {
        result +=  args[i] + Strings[i + 1]
    }

    return result
}

const a = fn`hello ${1}${3}, hello ${2}`
console.log(a);
