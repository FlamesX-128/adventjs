function getFilesToBackup(lastBackup: number, changes: [number, number][]): number[] {
    const res = changes.filter(
        (entry) => entry[1] > lastBackup
    )

    return [
        ...new Set(res.map(
            (entry) => entry[0]
        ))
    ].sort(
        (a, b) => a - b
    )
}

// Only exporting the function to test it.
export { getFilesToBackup }
