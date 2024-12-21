function inBox(box: string[]): boolean {
    return box.slice(1, -1).some(row => /^# +\* +#$/.test(row));
}
