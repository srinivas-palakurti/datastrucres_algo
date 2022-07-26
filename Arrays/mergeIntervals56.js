/* https://leetcode.com/problems/merge-intervals/

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


*/

var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a,b) => a[0]-b[0]);
    let result = [];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= intervals[i-1][1]) {
            intervals[i-1][1] = intervals[i][1];
            result.push(intervals[i-1]);            
        } else {
            result.push(intervals[i])
        }
    }
    console.log(result)
    return result;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
merge(intervals);