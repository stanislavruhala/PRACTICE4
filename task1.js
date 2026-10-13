function print1ToN(n) {
    if (n <= 0) return;
    print1ToN(n - 1);
    process.stdout.write(n + ' ');
}

print1ToN(467); 