<!-- Next Greater Element I -->
<link
    href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css"
    rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>

<style>
  .wp_blog_theme {
    --primary: #e58c32;
    --secondary: #f8c291;
    --light-bg: #fef9f4;
    --text-dark: #2d2d2d;
    --tab-radius: 12px;
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    --code-bg: #001f3f;
    --code-text: #d4f1ff;
  }

  .wp_blog_container {
    font-family: 'Segoe UI', sans-serif;
    background: var(--light-bg);
    margin: 0;
    padding: 0;
    color: var(--text-dark);
  }
    /* Heading */
    .wp_blog_main-heading {
        text-align: center;
        font-size: 2.4rem;
        color: var(--primary);
        margin-top: 2.5rem;
        font-weight: bold;
    }

    /* Explanation Card */
    .wp_blog_explanation,
    .wp_blog_code-tabs-container {
        max-width: 940px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: var(--tab-radius);
        box-shadow: var(--shadow);
    }

    /* Text and Visuals */
    .wp_blog_explanation h2 {
        font-size: 1.4rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }
    .wp_blog_explanation p,
    .wp_blog_explanation li {
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0.5rem 0;
    }
    .wp_blog_explanation code {
        background: #fef9f4;
        padding: 3px 6px;
        border-radius: 4px;
        font-family: "Courier New", monospace;
    }
    .wp_blog_explanation img {
        max-width: 100%;
        border-radius: var(--tab-radius);
        margin-top: 1rem;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    }

    /* Tab Buttons */
    .wp_blog_code-tabs-header {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    .wp_blog_code-tab-button {
        padding: 0.6rem 1.2rem;
        border: 1px solid var(--primary);
        background: white;
        color: var(--primary);
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .wp_blog_code-tab-button:hover {
        background: var(--secondary);
    }
    .wp_blog_code-tab-button.active {
        background: var(--primary);
        color: white;
    }

    /* Code Content */
    .wp_blog_code-tab-content {
        display: none;
        background: var(--code-bg);
        border-radius: var(--tab-radius);
    }
    .wp_blog_code-tab-content.active {
        display: block;
    }
    .wp_blog_code-tab-content pre {
        margin: 0;
        padding: 1.5rem;
        font-size: 1rem;
        overflow-x: auto;
        background: var(--code-bg);
        border-radius: var(--tab-radius);
        color: var(--code-text);
    }
</style>

<div class="wp_blog_container wp_blog_theme">
<h1 class="wp_blog_main-heading"></h1>

<div class="wp_blog_explanation">
    <h2>Problem Statement:</h2>
    <p>
        You are given an <code>m x n</code> grid where each cell can have one of three values:
    </p>
    <p>
        <ul>
            <li><code>0</code> representing an empty cell,</li>
            <li><code>1</code> representing a fresh orange, or</li>
            <li><code>2</code> representing a rotten orange.</li>
        </ul>
    </p>

    <p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p>
    
    <p>Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return <code>-1</code>.</p>


    <h2>Examples:</h2>
    <p><strong>Example 1:</strong></p>
    <p><strong>Input:</strong></p>
        <p>grid = [[2,1,1],[0,1,1],[1,0,1]]</p>
    <p><strong>Output:</strong><code> -1</code></p>
    <p><strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.</p>

    <p><strong>Example 2:</strong></p>
    <p><strong>Input:</strong></p>
        <p>grid = [[0,2]]</p>
    <p><strong>Output:</strong><code> 0</code></p>
    <p><strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.</p>
    
    <p><strong>For more details, refer to LeetCode problem 994.</strong></p>

    <h2>Constraints:</h2>
    <ul>
        <li><code>m == grid.length</code></li>
        <li><code>n == grid[i].length</code></li>
        <li><code>1 <= m, n <= 10</code></li>
        <li><code>grid[i][j] is 0, 1, or 2.</code></li>
    </ul>

    <h2>Approach:</h2>
    <ul>
        <li><strong>Identify rotten oranges</strong> (2) and push their positions + time <code>([i, j, 0])</code> into a <strong>queue</strong>.</li>
        
        <li><strong>Use BFS</strong> to spread rot in 4 directions (up, down, left, right).
            <ul>
                <li>For each direction:
                    If neighbor is a fresh orange (1), rot it (→ 2) and push it into the queue with time +1.
                </li>
            </ul>
        </li>

        <li><strong>Track time</strong> with <code>maxMinutes</code>.</li>
    
        <li>After BFS, if any fresh orange <code>(1)</code> left, return <code>-1</code>.</li>
        <li>Else, return <code>maxMinutes</code>.</li>
    </ul>

    <h2>Visualisation:</h2>
    <img
        src="https://namastedev.com/blog/wp-content/uploads/2025/07/Screenshot-2025-07-11-at-3.59.21 PM.png"
        alt="stack"
    />
                <h2>Time Complexity:</h2>
                <li>
                  <p><strong>Time Complexity = O(m x n)</strong> 
                </li> 
                <h2>Space Complexity:</h2>
                <li>
                  <p><strong>Space Complexity = O(m x n)</strong> 
                </p>
                </li>

<h2>Dry Run</h2> <div style="background: #f9f9f9; border-left: 4px solid var(--primary); padding: 1rem; border-radius: var(--tab-radius); margin: 1rem 0;"> <p><strong>Input:</strong></p> <pre style="white-space: pre-wrap; background: #fff5ea; padding: 1rem; border-radius: 8px; overflow-x: auto;"> grid = [ [2,1,1], [1,1,0], [0,1,1] ] </pre> <p><strong>State Transitions:</strong></p> <pre style="white-space: pre-wrap; background: #fff5ea; padding: 1rem; border-radius: 8px; overflow-x: auto;"> Initialize: m = 3, n = 3 queue = []
→ Scanning grid:
Found rotten orange at (0,0) → queue = [[0,0,0]]

Start BFS:
queue = [[0,0,0]]
maxMinutes = 0

Pop [0,0,0]
→ (0,1) is fresh → rot it → queue.push([0,1,1])
→ (1,0) is fresh → rot it → queue.push([1,0,1])
maxMinutes = max(0, 0) = 0

Pop [0,1,1]
→ (0,2) is fresh → rot it → queue.push([0,2,2])
→ (1,1) is fresh → rot it → queue.push([1,1,2])
maxMinutes = max(1, 0) = 1

Pop [1,0,1]
→ (2,0) is 0 (empty) → skip
maxMinutes = max(1, 1) = 1

Pop [0,2,2]
→ (1,2) is 0 → skip
maxMinutes = max(2, 1) = 2

Pop [1,1,2]
→ (2,1) is fresh → rot it → queue.push([2,1,3])
maxMinutes = max(2, 2) = 2

Pop [2,1,3]
→ (2,2) is fresh → rot it → queue.push([2,2,4])
maxMinutes = max(3, 2) = 3

Pop [2,2,4]
→ all neighbors are either 0 or already rotten
maxMinutes = max(4, 3) = 4

→ BFS finished, check for any remaining fresh oranges:
→ All are rotten or empty

</pre> <p><strong>Final Output:</strong> <code>4</code></p> <p><strong>Final State:</strong> <code> grid = [ [2,2,2], [2,2,0], [0,2,2] ]</code> </p> </div>

</div>

<div class="wp_blog_code-tabs-container">
    <div class="wp_blog_code-tabs-header">
        <button class="wp_blog_code-tab-button active" data-lang="js">
            JavaScript
        </button>
        <button class="wp_blog_code-tab-button" data-lang="py">Python</button>
        <button class="wp_blog_code-tab-button" data-lang="java">Java</button>
        <button class="wp_blog_code-tab-button" data-lang="cpp">C++</button>
        <button class="wp_blog_code-tab-button" data-lang="c">C</button>
        <button class="wp_blog_code-tab-button" data-lang="cs">C#</button>
    </div>

    <div class="wp_blog_code-tab-content active" data-lang="js">
<pre><code class="language-javascript">
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }
    let maxMinutes = 0;
    while (queue.length) {
        let [x, y, level] = queue.shift();

        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        maxMinutes = Math.max(level, maxMinutes);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return maxMinutes;
};
</code>
</pre>
</div>

    <div class="wp_blog_code-tab-content" data-lang="py">
        <pre><code class="language-python">
from collections import deque
def orangesRotting(grid):
    m = len(grid)
    n = len(grid[0])
    queue = deque()
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 2:
                queue.append((i, j, 0))
    maxMinutes = 0
    while queue:
        x, y, level = queue.popleft()

        if x > 0 and grid[x - 1][y] == 1:
            grid[x - 1][y] = 2
            queue.append((x - 1, y, level + 1))
        if x < m - 1 and grid[x + 1][y] == 1:
            grid[x + 1][y] = 2
            queue.append((x + 1, y, level + 1))
        if y < n - 1 and grid[x][y + 1] == 1:
            grid[x][y + 1] = 2
            queue.append((x, y + 1, level + 1))
        if y > 0 and grid[x][y - 1] == 1:
            grid[x][y - 1] = 2
            queue.append((x, y - 1, level + 1))
        maxMinutes = max(maxMinutes, level)
    for row in grid:
        if 1 in row:
            return -1
    return maxMinutes
    </code></pre>
    </div>
    <div class="wp_blog_code-tab-content" data-lang="java">
        <pre><code class="language-java">
public int orangesRotting(int[][] grid) {
    int m = grid.length;
    int n = grid[0].length;
    Queue<int[]> queue = new LinkedList<>();
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.add(new int[]{i, j, 0});
            }
        }
    }
    int maxMinutes = 0;
    while (!queue.isEmpty()) {
        int[] curr = queue.poll();
        int x = curr[0], y = curr[1], level = curr[2];

        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            queue.add(new int[]{x - 1, y, level + 1});
        }
        if (x < m - 1 && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            queue.add(new int[]{x + 1, y, level + 1});
        }
        if (y < n - 1 && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            queue.add(new int[]{x, y + 1, level + 1});
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            queue.add(new int[]{x, y - 1, level + 1});
        }
        maxMinutes = Math.max(level, maxMinutes);
    }
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return maxMinutes;
}
 </code></pre>
    </div>
    <div class="wp_blog_code-tab-content" data-lang="cpp">
        <pre><code class="language-cpp">
int orangesRotting(vector<vector<int>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    queue<tuple<int, int, int>> q;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == 2) {
                q.push({i, j, 0});
            }
        }
    }
    int maxMinutes = 0;
    while (!q.empty()) {
        auto [x, y, level] = q.front();
        q.pop();

        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            q.push({x - 1, y, level + 1});
        }
        if (x < m - 1 && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            q.push({x + 1, y, level + 1});
        }
        if (y < n - 1 && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            q.push({x, y + 1, level + 1});
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            q.push({x, y - 1, level + 1});
        }
        maxMinutes = max(level, maxMinutes);
    }
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return maxMinutes;
}
</code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="c">
        <pre><code class="language-c">
int orangesRotting(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize;
    int n = gridColSize[0];
    int queue[m * n][3];
    int front = 0, rear = 0;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == 2) {
                queue[rear][0] = i;
                queue[rear][1] = j;
                queue[rear][2] = 0;
                rear++;
            }
        }
    }
    int maxMinutes = 0;
    while (front < rear) {
        int x = queue[front][0];
        int y = queue[front][1];
        int level = queue[front][2];
        front++;

        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            queue[rear][0] = x - 1;
            queue[rear][1] = y;
            queue[rear][2] = level + 1;
            rear++;
        }
        if (x < m - 1 && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            queue[rear][0] = x + 1;
            queue[rear][1] = y;
            queue[rear][2] = level + 1;
            rear++;
        }
        if (y < n - 1 && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            queue[rear][0] = x;
            queue[rear][1] = y + 1;
            queue[rear][2] = level + 1;
            rear++;
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            queue[rear][0] = x;
            queue[rear][1] = y - 1;
            queue[rear][2] = level + 1;
            rear++;
        }

        if (level > maxMinutes) maxMinutes = level;
    }
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return maxMinutes;
}
</code></pre>
    </div>
    <div class="wp_blog_code-tab-content" data-lang="cs">
        <pre><code class="language-csharp">
public int OrangesRotting(int[][] grid) {
    int m = grid.Length;
    int n = grid[0].Length;
    Queue<(int, int, int)> queue = new();
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.Enqueue((i, j, 0));
            }
        }
    }
    int maxMinutes = 0;
    while (queue.Count > 0) {
        var (x, y, level) = queue.Dequeue();
        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            queue.Enqueue((x - 1, y, level + 1));
        }
        if (x < m - 1 && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            queue.Enqueue((x + 1, y, level + 1));
        }
        if (y < n - 1 && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            queue.Enqueue((x, y + 1, level + 1));
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            queue.Enqueue((x, y - 1, level + 1));
        }
        maxMinutes = Math.Max(level, maxMinutes);
    }
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) return -1;
        }
    }
    return maxMinutes;
}
  </code></pre>
    </div>
</div>
</div>
<script>
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll(".wp_blog_code-tab-button");
        const contents = document.querySelectorAll(".wp_blog_code-tab-content");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const lang = button.getAttribute("data-lang");
                buttons.forEach((btn) => btn.classList.remove("active"));
                contents.forEach((content) =>
                    content.classList.remove("active")
                );
                button.classList.add("active");
                document
                    .querySelector(
                        `.wp_blog_code-tab-content[data-lang="${lang}"]`
                    )
                    .classList.add("active");
            });
        });
    });
</script>