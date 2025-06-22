function RemoveElement(nums, val){
    let x = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[i] = nums[x];
            x = x + 1;
        }
    }
    return x;
}
let nums = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(RemoveElement(nums, val));