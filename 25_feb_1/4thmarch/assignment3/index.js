console.log("hhhh");

function findMean(a, n) {
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += a[i];

    return sum / n;
}


function findMedian(a, n) {

    a.sort();


    if (n % 2 != 0)
        return a[n / 2];

    return (a[Math.floor((n - 1) / 2)] +
        a[n / 2]) / 2;
}



let a = [1, 3, 4, 2, 7, 5, 8, 6]
let n = a.length;


document.write("Mean = " + findMean(a, n) + "<br>");
document.write("Median = " + findMedian(a, n));