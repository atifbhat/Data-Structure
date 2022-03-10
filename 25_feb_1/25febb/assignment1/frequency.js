console.log("hello");

let BinarySearch = function(arr, size, x, searchFirst) {

    let low = 0;
    let high = arr.length - 1;
    result = -1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == x) {

            result = mid;
            if (searchFirst)
                high = mid - 1;
            else
                low = mid + 1;

        } else if (x < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return result;

}



var arr = [1, 1, 3, 3, 5, 5, 5, 5, 9, 9, 11];
let x = 1;
let size = arr.length - 1;


let firstIndex = BinarySearch(arr, size, x, true);
if (firstIndex == -1) {
    console.log(x);
    console.log("0");

} else {
    let lastIndex = BinarySearch(arr, size, x, false);
    // console.log(x);
    // console.log(lastIndex - firstIndex + 1);
    console.log(`Count of ${x} is ${lastIndex - firstIndex + 1}`);


}