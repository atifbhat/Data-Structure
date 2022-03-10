console.log("recursive");

function findMinRec(A, n) {

    // If size = 0 means whole
    // array has been traversed
    if (n == 1)
        return A[0];

    return Math.min(A[n - 1],
        findMinRec(A, n - 1));
}

// Driver Code
let A = [1, -1, 0, 2, -2, 3, -3, 4, -4];
let n = A.length;

document.write("Min");

document.write(findMinRec(A, n));
document.write("<br>");
document.write("Max");
document.write(findMaxRec(A, n));

function findMaxRec(A, n) {

    // If size = 0 means whole array
    // has been traversed
    if (n == 1)
        return A[0];

    return Math.max(A[n - 1],
        findMaxRec(A, n - 1));
}