function calculateTime(deliveries: string[]) {
    let totalSeconds = 0;

    for (const delivery of deliveries) {
        const [hour, minute, second] = delivery.split(':');

        totalSeconds += +hour * 3600 + +minute * 60 + +second;
    }

    const timeLimitSeconds = 7 * 3600;
    const remainingTimeSeconds = totalSeconds - timeLimitSeconds;

    const signType = ['', '-'];
    const sign = signType[Number(remainingTimeSeconds < 0)];

    const absoluteRemainingTime = Math.abs(remainingTimeSeconds);

    const hours = Math.floor(absoluteRemainingTime / 3600);
    const minutes = Math.floor((absoluteRemainingTime % 3600) / 60);
    const seconds = absoluteRemainingTime % 60;

    return (
        sign
            + hours.toString().padStart(2, '0') + ':'
            + minutes.toString().padStart(2, '0') + ':'
            + seconds.toString().padStart(2, '0')
    );
}

export { calculateTime }
