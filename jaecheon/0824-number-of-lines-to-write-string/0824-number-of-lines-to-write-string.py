class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        charDict = {}
        arr = [chr(x) for x in range(ord('a'), ord('z')+1)]
        
        for pos, width in enumerate(widths):
            charDict[arr[pos]] = width

        lines = 1
        strLength = 0

        for char in s:
            if strLength + charDict[char] > 100:
                lines += 1
                strLength = charDict[char]
            else:
                strLength += charDict[char]

        return [lines, strLength]
        