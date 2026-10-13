function printAToB(a, b) {
    process.stdout.write(a + ' ');
    if (a === b) return;
    if (a < b) {
        printAToB(a + 1, b);
    } else {
        printAToB(a - 1, b);
    }
}

printAToB(687, 23); 