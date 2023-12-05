class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        return min(math.floor(len(candyType)/2) , len(set(candyType)))
