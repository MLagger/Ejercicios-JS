function listarDivisibles(minimo, maximo, divisor) {
    const divisibles = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisibles.push(i);
        }
    }
    return divisibles;
}
