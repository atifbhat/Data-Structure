console.log("mmcha");

var matrix = [
    [0, 1, 3],
    [5, 6, 4],
    [7, 6, 5]
];

document.write("element of matrix are");
document.write("<br>");

for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j]);
    }
    document.write("<br>");
}