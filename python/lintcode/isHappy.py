from functools import reduce

class Solution:
    # @param {int} n an integer
    # @return {boolean} true if this is a happy number or false
    def isHappy(self, n):
        path = []
        current = n
        while True:
            sum = self.sumOfSqr(current)
            if sum==1 :
                return True
            else :
                # 这里偷了一个懒 认为重复100次以上则为不可能
                if len(path)>100:
                    return False
                path.append(sum)
                current = sum


    def sumOfSqr(self,num):
        figOfNum=list(str(num))
        for i in range(len(figOfNum)):
            figOfNum[i]=int(figOfNum[i])
        result = reduce(lambda pre,cur:pre + cur**2,figOfNum,0)
        return result
        
if __name__=="__main__" :
    a = Solution()
    print(a.isHappy(19))