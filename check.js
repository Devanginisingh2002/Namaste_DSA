<!-- PrismJS for Syntax Highlighting -->
<link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>

<style>
/* Theme & Container */
.wp_blog_theme {
  --primary: #f39c12;
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
  background: var(--code-bg);
  color: var(--code-text);
  padding: 3px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}
.wp_blog_explanation img {
  max-width: 100%;
  border-radius: var(--tab-radius);
  margin-top: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
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

.check{
    width: 200px;
}
</style>

<div class="wp_blog_container wp_blog_theme">

  <h1 class="wp_blog_main-heading"></h1>

  <div class="wp_blog_explanation">
    <h2>Problem Statement:</h2>
    <p>Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.</p>

    <h2>Approach:</h2>
    <ul>
      <li>Define a function that takes two numbers as input.</li>
      <li>Add the two numbers inside the function.</li>
      <li>Call the function with two integers & print the result.</li>
    </ul>

    <h2>Example:</h2>
    <p><strong>Input:</strong> 5, 3</p>
    <p><strong>Process:</strong> a + b => 5 + 3 = 8</p>
    <p><strong>Output:</strong> 8</p>

    <h2>Visualisation:</h2>
    <img src="https://namastedev.com/blog/wp-content/uploads/2025/06/Screenshot-2025-06-19-at-4.44.42 PM.png" alt="Visual representation of sum" class="check">

    <h2>Explanation:</h2>
    <ul style="list-style: none; padding-left: 0;">
      <li><span style="color: #f39c12;">●</span> <code>Sum(a, b)</code> is a function that takes two arguments.</li>
      <li><span style="color: #f39c12;">●</span> Adds them and stores the result in a variable named <code>add</code>.</li>
      <li><span style="color: #f39c12;">●</span> Prints the result.</li>
      <li><span style="color: #f39c12;">●</span> <code>Sum(a,b)</code> calls the function with a=5 & b=3, so it prints 8.</li>
    </ul>
  </div>

  <div class="wp_blog_code-tabs-container">
    <div class="wp_blog_code-tabs-header">
      <button class="wp_blog_code-tab-button active" data-lang="js">JavaScript</button>
      <button class="wp_blog_code-tab-button" data-lang="py">Python</button>
      <button class="wp_blog_code-tab-button" data-lang="java">Java</button>
      <button class="wp_blog_code-tab-button" data-lang="cpp">C++</button>
      <button class="wp_blog_code-tab-button" data-lang="c">C</button>
      <button class="wp_blog_code-tab-button" data-lang="cs">C#</button>
    </div>

    <div class="wp_blog_code-tab-content active" data-lang="js">
      <pre><code class="language-javascript">
function sum(a, b) {
  let add = a + b;
  console.log(add);
}
sum(5, 3);
      </code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="py">
      <pre><code class="language-python">
def sum(a, b):
    add = a + b
    print(add)

sum(5, 3)
      </code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="java">
      <pre><code class="language-java">
public class Main {
  public static void sum(int a, int b) {
    int add = a + b;
    System.out.println(add);
  }

  public static void main(String[] args) {
    sum(5, 3);
  }
}
      </code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="cpp">
      <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

void sum(int a, int b) {
  int add = a + b;
  cout &lt;&lt; add &lt;&lt; endl;
}

int main() {
  sum(5, 3);
  return 0;
}
      </code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="c">
      <pre><code class="language-c">
#include &lt;stdio.h&gt;

void sum(int a, int b) {
  int add = a + b;
  printf("%d\n", add);
}

int main() {
  sum(5, 3);
  return 0;
}
      </code></pre>
    </div>

    <div class="wp_blog_code-tab-content" data-lang="cs">
      <pre><code class="language-csharp">
using System;

class Program {
  static void Sum(int a, int b) {
    int add = a + b;
    Console.WriteLine(add);
  }

  static void Main() {
    Sum(5, 3);
  }
}
      </code></pre>
    </div>
  </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.wp_blog_code-tab-button');
  const contents = document.querySelectorAll('.wp_blog_code-tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      document.querySelector(`.wp_blog_code-tab-content[data-lang="${lang}"]`).classList.add('active');
    });
  });
});
</script>

