---
layout: post
title: Blocks, Procs and Lambdas
category: note
plugin: intense
hidden: true
scheme-link: "#148DFA"
---
## Block
A block in Ruby is a type of syntax. To demonstrate a block, let's use the enumerable &#35;each.

{%gist cutofmyjib/c6447799e08e25501fc5 %}

We can use a block as an argument to the method, we need the `yield` keyword to do so, make sure that there is a block when the method is called (see lines 6 - 7 below).

{%gist cutofmyjib/9f7f24c3c38c46dc8e10 %}

## Proc
By calling a `Proc`, you can use the block of code more than once in your program since it's an object, which blocks are not. By using the `call` method on line 3, the block on line 7 to 9 gets executed. Line 4 just shows you what Class proc is.

{%gist cutofmyjib/b36f81dda2591e037ff4 %}

## Lambda
A lambda is a proc object, check out lines 5 and 15 below. It is like Proc but they have differences.

{%gist cutofmyjib/308be75805ff224c639a %}

Procs and lambdas are blocks assigned to variables. Procs and lambdas are created similarly. Here are some of the differences between Procs and lamdas:

1. Lambdas will throw errors if it doesn't find the correct number of arguments it requires.

2. Procs and lambdas are different in the way they return. You can watch the video <a href="https://youtu.be/VBC-G6hahWA?t=17m28s">here</a>.

You can read more about blocks, procs and lambdas <a href="http://www.reactive.io/tips/2008/12/21/understanding-ruby-blocks-procs-and-lambdas/">here</a>.

<a class="twitter-share-button" href="https://twitter.com/share"
  data-related="twitterdev"
  data-size="large"
  data-count="none">
Tweet
</a>

<script>
window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
</script>