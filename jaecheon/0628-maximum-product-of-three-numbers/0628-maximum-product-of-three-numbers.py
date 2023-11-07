class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        sortedList1 = sorted(nums, reverse=True)

        bigs = sortedList1[:3]
        smalls = sortedList1[-2:]

        return max(bigs[0] * bigs[1] * bigs[2] , bigs[0] * smalls[0] * smalls[1] )
