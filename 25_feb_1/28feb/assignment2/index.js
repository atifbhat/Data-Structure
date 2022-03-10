var arr = [2, 7, 11, 15];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == 9) {
        // console.log(arr[i], arr[i + 1]);
        // console.log(arr[i + 1]);
        document.write(`The postion of the first element ie. ${arr[i]} is: ${i+1}`);
        document.write(`<br/>`);
        document.write(`<br/>`);
        document.write(`The postion of the Second element ie. ${arr[i+1]} is: ${i+2}`);

        break;

    }


}