export default function fixFiles(files) {
    const elements = {}

    files.forEach((str, i) => {
        elements[str] ? elements[str]++ : elements[str] = 1

        if (elements[str] > 1)
            files[i] = `${str}(${elements[str] - 1})`

    })

    return files
}
