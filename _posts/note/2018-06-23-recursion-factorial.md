---
layout: post
title: Recursion - Factorial
category: note
plugin: intense
hidden: true
scheme-link: "#9370DB"
---

# (n!)

Factorial is the product of a number and all the numbers below it. Only applicable to regular numbers (positive integers). 

For example, factorial 4, which is written also as 4! is equal to 24.

So:
`4 x 3 x 2 x 1 = 24`

Let' solve this factorial problem in two ways, one without using recursion:

```javascript
function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}
```

Now let's solve it using recursion. Recursion needs a base case, so in this problem, where 0! or 1!, we need to return 1.

```javascript
function factorial(num) {
	if (num <= 1) {
    	return 1;
	}
	
	return num * factorial(num - 1);
}
```

Notice that factorial(num) function is used in the function again, this is where recursion is happening. The function is being called inside the function.

Since 4! is 4 x 3! (see <a href="https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursive-factorial" target="_blank" rel="noopener noreferrer">Recursive factorial - Khan Academy</a> for more explanation), this function is solving it recursively, `num x factorial(num-1)`, calling the function over and over inside factorial(num) until num is equal to 0 or 1.

## **notes**

Visuals help, natashatherobot draws a diagram of the recursive function for factorial on her blog: 
<a href="https://www.natashatherobot.com/recursion-factorials-fibonacci-ruby/" target="_blank" rel="noopener noreferrer">Inception All Over Again: Recursion, Factorials, And Fibonacci In Ruby - natashatherobot</a>

Here's an excellent video explaning factorial:
<a href="https://youtu.be/4j66DS_XTSo" target="_blank" rel="noopener noreferrer">Evaluating Factorials! Basic Info</a>

Another video comparing recursive and iterative factorial functions by Khan Academy: <a href="https://youtu.be/kx6DfrYfWnQ" target="_blank" rel="noopener noreferrer">comparing recursive and iterative factorial functions by Khan Academy</a>

<a href="http://mathforum.org/library/drmath/view/57128.html" target="_blank" rel="noopener noreferrer">Why does 0 factorial equal 1?</a>

<p class=store>
  <a href="https://www.twitter.com/intent/tweet?text=@bossigner;url=http://http://cutofmyjib.github.io/callback.html" target="_blank">Please hit me up on twitter for feedback</a>
</p>
