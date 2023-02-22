export const twoSum = (nums: number[], target: number) => {
  const prevValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const desiredNum = target - currentNum;
    const desiredIndex: number = prevValues[desiredNum];

    if (desiredIndex != null) {
      return [desiredIndex, i];
    } else {
      prevValues[currentNum] = i;
    }
  }
};

twoSum([2, 3, 5, 2, 4, 65, 2], 67);
