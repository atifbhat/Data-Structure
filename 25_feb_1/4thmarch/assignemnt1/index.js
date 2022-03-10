console.log("boooo");
var arr = [5, 2, 3, 1];
let temp = 0;


let length = arr.length;

document.write(" The actual array:-> ");
for (let i = 0; i < length; i++) {
    document.write(arr[i]);

}
document.write("<br>");


for (i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}



document.write(" The sorted array:-> ");

for (i = 0; i < length; i++) {
    document.write(arr[i]);
}