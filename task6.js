function printLeftToRight(n) {
    if (n === 0) return;
    printLeftToRight(Math.floor(n / 10));
    process.stdout.write((n % 10) + ' ');
}

printLeftToRight(917365); 