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
        

        return count;
    }
}
