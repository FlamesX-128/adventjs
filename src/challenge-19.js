export default function learn(time, courses) {
    let result = [0];

    for (let i = 0; i < courses.length; i++) {
        for (let j = i + 1; j < courses.length; j++) {
            if (courses[i] + courses[j] == time) return [i, j]

            if (
                courses[i] + courses[j] > result[0] &&
                courses[i] + courses[j] < time
            ) result = [courses[i] + courses[j], i, j];

        }

    }

    return result.length > 2 ? result.slice(1) : null;
}
