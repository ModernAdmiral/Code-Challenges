# https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

# Solution 1
# initialize set
# set answer variable to true by default
# loop though list.
#   if element does not exist in set, add to set.
#   if element does exist in set, return false

# Solution 2
# convert nums to set. set will remove duplicates.
# compare length of nums to new created set of nums. return true if equal. else return false


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len({*nums}) == len(nums):
            return False
        else:
            return True
