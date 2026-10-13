function printRightToLeft(n) {
    if (n === 0) return;
    process.stdout.write((n % 10) + ' ');
    printRightToLeft(Math.floor(n / 10));
}

printRightToLeft(7472); 