function calculateMatrixPower() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;
    let power = document.getElementById('power').value;

    let matrix = [[num1, num2], [num3, num4]];
    let result = matrixPower(matrix, power);

    document.getElementById('result').innerHTML = 'The result of raising the matrix to ' + power + ' is:\n' + JSON.stringify(result);
}

function matrixPower(matrix, power) {
    let result = matrix;
    for(let p = 1; p < power; p++) {
        result = multiplyMatrices(result, matrix);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let aNumRows = matrixA.length, aNumCols = matrixA[0].length,
        bNumRows = matrixB.length, bNumCols = matrixB[0].length,
        m = new Array(aNumRows);  
    for (let r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); 
        for (let c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             
            for (let i = 0; i < aNumCols; ++i) {
                m[r][c] += matrixA[r][i] * matrixB[i][c];
            }
        }
    }
    return m;
}
