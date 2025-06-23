function getSecureRandomInt(min, max) {
    const range = max - min + 1;
    const randomBuffer = new Uint8Array(1); // 8位无符号整数
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / 255; // 归一化到 [0, 1)
    return Math.floor(randomNumber * range) + min;
}

// 生成一个 0 到 10 之间的随机整数
const randomNum = getSecureRandomInt(0, 10);
console.log(randomNum); // 输出：0 到 10 之间的随机整数
