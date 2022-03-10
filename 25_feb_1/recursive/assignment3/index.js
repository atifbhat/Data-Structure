console.log("mn");

function PrintReverseOrder(N) {

    for (let i = N; i > 0; i--)
        if (i % 2 == 0) {
            document.write(i + " ");
        }

}

let N = 76;

PrintReverseOrder(N);