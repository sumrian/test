// new Array(n).fill('0').join('')：

// new Array(n) 创建了一个包含 n 个元素的新数组。
// .fill('0') 将数组中的所有元素填充为 '0'，即在数组中生成 n 个 '0'。
// .join('') 将数组中的所有元素拼接成一个字符串，由于数组中全是 '0'，因此最终得到的是长度为 n 的 '0' 字符串。
// ${new Array(n).fill('0').join('')}：

// 这部分代码生成了一个长度为 n 的 '0' 字符串，用于前置补零。
// ${num}：

// 这里是将数字 num 转换为字符串。
// 综合起来，${new Array(n).fill('0').join('')}${num} 这段代码的作用是将数字 num 前补零至指定长度 n。例如，如果 n 为 3，num 为 7，那么最终结果将会是 '007'。