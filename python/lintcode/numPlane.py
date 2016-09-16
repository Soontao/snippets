"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""


class Solution:
    # @param airplanes, a list of Interval
    # @return an integer
    def countOfAirplanes(self, airplanes):
        m ={}
        for air in airplanes:
            fl = self.fullList(air)
            for t in fl:
                if m.get(t) :
                    m[t]=m[t]+1
                else :
                    m[t]=1
        return max(m.values())

    def fullList(self,l):
        return list(range(l[0],l[1]+1))


if __name__ == "__main__":
    solution = Solution()
    print(solution.countOfAirplanes([[1,10],[2,3],[5,8],[4,7]]))