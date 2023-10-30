/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const differ1 = new Set(nums1.filter((value) => !set2.has(value)));
    const differ2 = new Set(nums2.filter((value) => !set1.has(value)));

    return [[...differ1], [...differ2]];
};