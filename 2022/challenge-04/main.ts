function fitsInOneBox(boxes: { l: number, w: number, h: number }[]): boolean {
    return boxes.sort(
        (a, b) => a.l * a.w * a.h - b.l * b.w * b.h
    ).every((box, i) => {
        const item = boxes[i + 1]

        return item
            ? item.l > box.l && item.w > box.w && item.h > box.h
            : true
    })
}

// Only exporting the function to test it.
export { fitsInOneBox }
