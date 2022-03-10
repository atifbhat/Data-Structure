console.log("leet");
// const arr1 = [1, 2, 2, 1];
// const arr2 = [2, 2];
// const intersection = (arr1, arr2) => {
//     const res = [];
//     const { length: len1 } = arr1;
//     const { length: len2 } = arr2;
//     const smaller = (len1 < len2 ? arr1 : arr2).slice();
//     const bigger = (len1 >= len2 ? arr1 : arr2).slice();
//     for (let i = 0; i < smaller.length; i++) {
//         if (bigger.indexOf(smaller[i]) !== -1) {
//             res.push(smaller[i]);
//             bigger.splice(bigger.indexOf(smaller[i]), 1, undefined);
//         }

//     };
//     return res;

// };
// console.log(intersection(arr1, arr2));


var intersect = function(nums1, nums2) {
    let sol = [];
    for (let i = 0; i < nums2.length; i++) {
        let index = nums1.indexOf(nums2[i]);
        if (index >= 0) {
            sol.push(nums2[i]);
            nums1.splice(index, 1);
        }
    }
    return sol.sort();
};

var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];

console.log(intersect(nums1, nums2));