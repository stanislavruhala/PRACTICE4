function isPowerOfTwo(n) {
    if (n === 1) return true;
    if (n <= 0 || n % 2 !== 0) return false;
    return isPowerOfTwo(Math.floor(n / 2));
}

function checkPower(n) {
    if (isPowerOfTwo(n)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

checkPower(256);
checkPower(1025);