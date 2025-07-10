function removeElement(nums){
    let x = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] > nums[x]){
            x++;
            nums[x] = nums[i];
        }
    }
    return x+1;
}

let nums = [0,0,0,1,1,2,2,2];
console.log(removeElement(nums))<!-- PrismJS for Syntax Highlighting -->
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
       Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (<code>push</code>, <code>top</code>, <code>pop</code>, and <code>empty</code>).
    </p>

    <p>Implement the <code>MyStack</code> class:</p>
    <p>
       <ul>
        <li><code>void push(int x)</code>Pushes element x to the top of the stack.</li>
        <li><code>int pop()</code>Removes the element on the top of the stack and returns it..</li>
        <li><code>int top()</code>Returns the element on the top of the stack.</li>
        <li><code>boolean empty()</code>Returns true if the stack is empty, <code>false</code> otherwise.</li>
       </ul>
    </p>

    <p><strong>Notes</strong>
    <ul>
        <li>You must use only standard operations of a queue, which means that only <code>push to back</code>, <code>peek/pop from front</code>, <code>size</code> and <code>is empty</code> operations are valid.</li>
        <li>Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.</li>
    </ul>
    </p>
    <h2>Examples</h2>
    <p><strong>Example 1:</strong></p>
    <p><strong>Input:</strong>["MyStack", "push", "push", "top", "pop", "empty"]
    [[], [1], [2], [], [], []]</p>
    <p><strong>Output:</strong><code>[null, null, null, 2, 2, false]</code></p>
    <p><strong>Explanation</strong>
    MyStack myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    myStack.top(); // return 2
    myStack.pop(); // return 2
    myStack.empty(); // return False
    </p>
    <h2>Constraints:</h2>
    <ul>
        <li>1 <= x <= 9</li>
        <li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>empty</code>.</li>
        <li>All the calls to <code>pop</code> and <code>top</code>are valid.</li>
    </ul>

    <p>
        <strong>Follow-up</strong>:
        Can you implement the stack using only one queue?
    </p>

    <h2>Approach: Implement Stack Using One Queue</h2>
    <ul>
        <li>
            We simulate LIFO (stack) using only FIFO (queue) operations.
        </li>

        <li>
            We maintain a single queue (q).
        </li>

        <li>
            Remove the last pushed element (i.e., rear of q1).
            <ul>
                <li>Insert it at the back (q.push(x)).</li>
                <li>Rotate the queue to bring the new element to the front by dequeuing and enqueuing all previous elements.</li>
            </ul>
        </li>
    </ul>

    <h2>Visualisation:</h2>
    <img
        src="https://namastedev.com/blog/wp-content/uploads/2025/07/Screenshot-2025-07-07-at-9.08.56 PM.png"
        alt="stack"
    />
                <h2>Time Complexity:</h2>
                <li>
                  <p><strong>push → O(n)</strong></p>
                  <p><strong>pop → O(1)</strong></p>
                  <p><strong>top → O(1)</strong></p>
                  <p><strong>empty  → O(1)</strong></p>
                    </li> 
                <h2>Space Complexity:</h2>
                <li>
                  <p><strong>Space Complexity = O(n)</strong>
                <li>Where n is the total number of elements in the stack.</li>  
                </p>
                </li>

                <h2>Dry Run</h2> <div style="background: #f9f9f9; border-left: 4px solid var(--primary); padding: 1rem; border-radius: var(--tab-radius); margin: 1rem 0;"> <p><strong>Input:</strong></p> <pre style="white-space: pre-wrap; background: #fff5ea; padding: 1rem; border-radius: 8px; overflow-x: auto;"> Operations: push(1) push(2) push(3) top() pop() top() empty() </pre> <p><strong>State Transitions:</strong></p> <pre style="white-space: pre-wrap; background: #fff5ea; padding: 1rem; border-radius: 8px; overflow-x: auto;"> After push(1): q = [1]
After push(2):
q = [1, 2]

After push(3):
q = [1, 2, 3]

top():
Loop to rotate first n-1 = 2 elements:
q.push(q.shift()) → q = [2, 3, 1]
q.push(q.shift()) → q = [3, 1, 2]
Peek front = 3
Push front back → q = [1, 2, 3]
→ Returns: <strong>3</strong>

pop():
Loop to rotate first n-1 = 2 elements:
q.push(q.shift()) → q = [2, 3, 1]
q.push(q.shift()) → q = [3, 1, 2]
Remove front = 3 → q = [1, 2]
→ Returns: <strong>3</strong>

top():
Loop to rotate first n-1 = 1 element:
q.push(q.shift()) → q = [2, 1]
Peek front = 2
Push front back → q = [1, 2]
→ Returns: <strong>2</strong>

empty():
q = [1, 2] → Not empty
→ Returns: <strong>false</strong>
</pre>

<p><strong>Final State:</strong> <code>q = [1, 2]</code>, <code>Stack (top to bottom): [2, 1]</code></p> </div>

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
var MyStack = function() {
    this.q = []; 
};

MyStack.prototype.push = function(x) {
    this.q.push(x);
};

MyStack.prototype.pop = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    return this.q.shift();
};

MyStack.prototype.top = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    let front = this.q.shift();
    this.q.push(front);
    return front;
};

MyStack.prototype.empty = function() {
    return this.q.length === 0;
};
</code></pre>

</div>

    <div class="wp_blog_code-tab-content" data-lang="py">
        <pre><code class="language-python">
from collections import deque

class MyStack:
    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)

    def pop(self) -> int:
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
        return self.q.popleft()

    def top(self) -> int:
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
        front = self.q.popleft()
        self.q.append(front)
        return front

    def empty(self) -> bool:
        return len(self.q) == 0

    </code></pre>
    </div>
    <div class="wp_blog_code-tab-content" data-lang="java">
        <pre><code class="language-java">
import java.util.LinkedList;
import java.util.Queue;

class MyStack {
    Queue<Integer> q = new LinkedList<>();

    public void push(int x) {
        q.offer(x);
    }

    public int pop() {
        int n = q.size();
        for (int i = 0; i < n - 1; i++) {
            q.offer(q.poll());
        }
        return q.poll();
    }

    public int top() {
        int n = q.size();
        for (int i = 0; i < n - 1; i++) {
            q.offer(q.poll());
        }
        int front = q.poll();
        q.offer(front);
        return front;
    }

    public boolean empty() {
        return q.isEmpty();
    }
}
 </code></pre>
    </div>
    <div class="wp_blog_code-tab-content" data-lang="cpp">
        <pre><code class="language-cpp">
#include &lt;queue&gt;
class MyStack {
    std::queue<int> q;
public:
    void push(int x) {
        q.push(x);
    }

    int pop() {
        int n = q.size();
        for (int i = 0; i < n - 1; ++i) {
            q.push(q.front());
            q.pop();
        }
        int top = q.front();
        q.pop();
        return top;
    }

    int top() {
        int n = q.size();
        for (int i = 0; i < n - 1; ++i) {
            q.push(q.front());
            q.pop();
        }
        int top = q.front();
        q.pop();
        q.push(top);
        return top;
    }

    bool empty() {
        return q.empty();
    }
};
    </code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="c">
        <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdbool.h&gt;
#include &lt;stdlib.h&gt;

#define MAX 1000

typedef struct {
    int data[MAX];
    int front;
    int rear;
    int size;
} Queue;

void initQueue(Queue* q) {
    q->front = 0;
    q->rear = 0;
    q->size = 0;
}

void enqueue(Queue* q, int val) {
    if (q->size == MAX) {
        printf("Queue overflow\n");
        return;
    }
    q->data[q->rear] = val;
    q->rear = (q->rear + 1) % MAX;
    q->size++;
}

int dequeue(Queue* q) {
    if (q->size == 0) {
        printf("Queue underflow\n");
        return -1;
    }
    int val = q->data[q->front];
    q->front = (q->front + 1) % MAX;
    q->size--;
    return val;
}

int queueSize(Queue* q) {
    return q->size;
}

bool isQueueEmpty(Queue* q) {
    return q->size == 0;
}

// MyStack implementation using one queue
typedef struct {
    Queue q;
} MyStack;

void myStackInit(MyStack* obj) {
    initQueue(&obj->q);
}

void myStackPush(MyStack* obj, int x) {
    enqueue(&obj->q, x);
}

int myStackPop(MyStack* obj) {
    int n = queueSize(&obj->q);
    for (int i = 0; i < n - 1; i++) {
        enqueue(&obj->q, dequeue(&obj->q));
    }
    return dequeue(&obj->q);
}

int myStackTop(MyStack* obj) {
    int n = queueSize(&obj->q);
    for (int i = 0; i < n - 1; i++) {
        enqueue(&obj->q, dequeue(&obj->q));
    }
    int top = dequeue(&obj->q);
    enqueue(&obj->q, top);
    return top;
}

bool myStackEmpty(MyStack* obj) {
    return isQueueEmpty(&obj->q);
}
// Example usage
int main() {
    MyStack s;
    myStackInit(&s);

    myStackPush(&s, 10);
    myStackPush(&s, 20);
    myStackPush(&s, 30);

    printf("Top: %d\n", myStackTop(&s)); // 30
    printf("Pop: %d\n", myStackPop(&s)); // 30
    printf("Top after pop: %d\n", myStackTop(&s)); // 20
    printf("Is empty? %s\n", myStackEmpty(&s) ? "Yes" : "No"); // No

    return 0;
}
    </code></pre>
    </div>
    <div class="wp_blog_code-tab-content" data-lang="cs">
        <pre><code class="language-csharp">
using System.Collections.Generic;

public class MyStack {
    private Queue<int> q = new Queue<int>();

    public void Push(int x) {
        q.Enqueue(x);
    }

    public int Pop() {
        int n = q.Count;
        for (int i = 0; i < n - 1; i++) {
            q.Enqueue(q.Dequeue());
        }
        return q.Dequeue();
    }

    public int Top() {
        int n = q.Count;
        for (int i = 0; i < n - 1; i++) {
            q.Enqueue(q.Dequeue());
        }
        int front = q.Dequeue();
        q.Enqueue(front);
        return front;
    }

    public bool Empty() {
        return q.Count == 0;
    }
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
        })
        

        i




        
    });
</script>;