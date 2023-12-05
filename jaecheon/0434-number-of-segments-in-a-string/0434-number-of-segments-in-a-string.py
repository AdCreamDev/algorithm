class Solution:
    def countSegments(self, s: str) -> int:
        white = True
        count = 0

        for ch in s:
            if ch == " ":
                white = True
            
            if ch != " " and white == True:
                white = False
                count += 1

        return count
        