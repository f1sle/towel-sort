// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix
        .map((el, i) =>
            i % 2 === 0 ? el.sort((a, b) => a - b) : el.sort((a, b) => b - a)
        )
        .flat();
};
