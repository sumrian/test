const fs = require('fs');

function generatePhoneNumbers(prefixArray, count) {
    const phoneNumbers = new Set(); // 使用Set来存储生成的手机号码，确保不重复
    let currentCount = 0;

    while (currentCount < count) {
        // 随机选择一个前缀
        const prefix = prefixArray[Math.floor(Math.random() * prefixArray.length)];
        // 生成剩余的6位数字
        let remainingDigits = '';
        for (let i = 0; i < 6; i++) {
            remainingDigits += Math.floor(Math.random() * 10);
        }
        // 拼接完整的手机号码
        const phoneNumber = prefix + remainingDigits;

        // 如果手机号码不在Set中，添加到Set中
        if (!phoneNumbers.has(phoneNumber)) {
            phoneNumbers.add(phoneNumber);
            currentCount++;
        }
    }

    // 将生成的手机号码写入phone.txt文件
    fs.writeFile('phone.txt', Array.from(phoneNumbers).join('\n'), (err) => {
        if (err) {
            console.error('写入文件时出错:', err);
        } else {
            console.log('手机号码已成功写入phone.txt文件');
        }
    });
}

// 示例调用
const prefixes = ["13023", "13071", "13136", "13221", "15558",'15658','16665','18667'];

const numberOfPhones = 40000;
generatePhoneNumbers(prefixes, numberOfPhones);
