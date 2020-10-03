function twoSums(nums, target) {
  var i;
  var j;
  var jumpout = false;
  console.log("nums = " + nums);
  console.log("target = " + target);
  console.log("The Result is ")
  for(i=0; i<nums.length; i++){
    
    for(j=0; j<nums.length; j++){
      var result
      if ( i !== j){
        result = nums[i] + nums[j]; 
      }
      
      if(result === target){
        console.log("nums[" + i +"] + nums[" + j + "] = " + target);
        console.log("Because")
        console.log( nums[i] + " + " + nums[j] + " = " + target);
        jumpout = true;
        break;
      }
    }
    if (jumpout){
      break;
    }
  }
  console.log("---------------------------")
}

var nums1 = [2,7,11,15];

var target1 = 13;


twoSums( nums1, target1 );

var nums2 = [3,2,4];

var target2 = 6;

twoSums( nums2, target2 );

var nums3 = [3,3];

var target3 = 6;

twoSums( nums3, target3 );