export default function contains(store, product) {
    return Object.keys(store).some(
        (key) => store[key] !== product
            ? typeof store[key] === "object" ? contains(store[key], product) : false
            : true,
    );
}
