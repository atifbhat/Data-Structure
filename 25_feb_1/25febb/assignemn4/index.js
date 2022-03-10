console.log("boom");

var searchInsert = function(nums, target) {
    var i = 0;
    var notFound = false;
    console.log(nums);
    while (!notFound) {
        if (nums[i] === target) {
            notFound = true;
            return i;
        } else {
            if (target > nums[i])
                i++
                else {
                    notFound = true;
                    nums.splice(i, 0, target)
                    return i;
                }
        }
    }
};

// V2
var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length;
    var index = Math.floor((end - start) / 2) + start; // this is the midpoint

    if (target > nums[end - 1])
        index = end;
    else {
        while (start < end) {
            var val = nums[index];
            if (val === target)
                return index;
            else {
                if (target < val) {
                    end = index
                } else if (target > val) {
                    start = index + 1;
                }
                index = Math.floor((end - start) / 2) + start;
            }
        }
    }
    nums.splice(index, 0, target);
    return index;
};
var nums = [1, 3, 5, 6];
let target = 7;

var res = searchInsert(nums, target);
console.log(`The position is-: ${res}`);