var missingNumber = function(nums) {

    let mis = new Set(nums);
    let expectedLength = nums.length + 1
    for (let number = 0; number < expectedLength; number++) {
        if (!mis.has(number)) {
            return number
        }
    }
    return -1
};

  console.log(missingNumber([1,0]))