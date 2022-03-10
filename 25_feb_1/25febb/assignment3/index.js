console.log("try");






function solution(A) {
    let n = A.length;

    let present = new Array(n + 1);


    for (let i = 0; i < n + 1; i++) {
        present[i] = false;
    }

    for (let i = 0; i < n; i++) {

        if (A[i] >= 0 && A[i] <= n) {
            present[A[i]] = true;
            console.log(A[i]);
        }
    }


    for (let i = 0; i <= n; i++) {
        if (!present[i]) {
            return i;
        }
    }

    return n + 1;
}


let A = [1, 2, 3, 4, 6, 9, 11, 15]
document.write(`The smallest missing elemnt is ${solution(A)}`);