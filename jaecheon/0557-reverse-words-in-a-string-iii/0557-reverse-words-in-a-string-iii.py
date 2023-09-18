class Solution:
    def reverseWords(self, s: str) -> str:
        arr = s.split(" ")
        res = ""

        for ch in arr:
            res += ch[::-1]
            res += " "

        return res[:len(res)-1]
    