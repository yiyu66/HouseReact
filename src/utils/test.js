const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

function intersection(nums1, nums2) {
  let res = nums1.filter(
    (value) => nums2.includes(value)
  );
  console.log(Array.from(new Set(res)));
}

intersection(nums1, nums2);