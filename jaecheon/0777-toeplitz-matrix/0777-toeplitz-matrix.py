class Solution:
    def checkToeplitz(self, matrix: List[List[int]], x, y, rowSize, colSize) -> bool:
        posX = x
        posY = y
        
        value = matrix[posY][posX]

        while posX < colSize and posY < rowSize:
            if value != matrix[posY][posX]:
                return False
            posX += 1
            posY += 1
        
        return True

    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        row = len(matrix)
        col = len(matrix[0])
        size = min(row, col)

        for x in range(col-1):
            if False == self.checkToeplitz(matrix, x, 0, row, col):
                return False

        for y in range(row-1):
            if False == self.checkToeplitz(matrix, 0, y, row, col):
                return False
        
        return True
