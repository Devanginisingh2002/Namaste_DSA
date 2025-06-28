import java.util.HashMap;

class Solution {
    public int sumK(Node root, int k) {
        // Map to store prefix sum and its frequency
        HashMap<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);  // base case for prefix sum == k
        return dfs(root, 0, k, prefixSumCount);
    }
    
    private int dfs(Node node, int currentSum, int k, HashMap<Integer, Integer> prefixSumCount) {
        if (node == null) return 0;
        
        currentSum += node.data;
        int count = prefixSumCount.getOrDefault(currentSum - k, 0);
        
        prefixSumCount.put(currentSum, prefixSumCount.getOrDefault(currentSum, 0) + 1);
        
        count += dfs(node.left, currentSum, k, prefixSumCount);
        count += dfs(node.right, currentSum, k, prefixSumCount);
        
        // Backtrack to remove the current path sum count
        prefixSumCount.put(currentSum, prefixSumCount.get(currentSum) - 1);
        
        return count;
    }
}
