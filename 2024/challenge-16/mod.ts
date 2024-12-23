function removeSnow(s: string): string {
    const pattern = /(.)\1/g;

    while (pattern.test(s)) {
        s = s.replace(pattern, "");
    }

    return s;
}
