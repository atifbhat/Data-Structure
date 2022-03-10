console.log("sortcolor");

var sortColors = function(nums) {
    var m = 0;
    var n = 0;
    var k = nums.length;
    for (var i = 0; i < k; i++) {
        if (nums[i] === 0) {
            nums[i] = 2;
            nums[n++] = 1;
            nums[m++] = 0;
        } else if (nums[i] === 1) {
            nums[i] = 2;
            nums[n++] = 1;
        } else {
            nums[i] = 2;
        }
    }
};


var nums = [2, 0, 2, 1, 1, 0];
document.write(`the  colors :-> ${nums}`);
document.write("<br>");
var res = sortColors(nums);
document.write(`the sorted colors :-> ${nums}`);