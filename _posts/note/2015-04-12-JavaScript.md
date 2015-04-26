---
layout: post
title: Javascript Objects and Ruby Hashes
category: note
plugin: intense
hidden: true
scheme-link: "#BB8855"
---

Javascript objects and Ruby hashes are constructed the same, except that Ruby uses <em>hashrockets</em> `=>`. Both of them use key and value pairs, in Javascript the `key` is called `property`. In Javascript the properties can only be in string form, so if a number is used as a property, Javascript will "stringify" it but if you use special characters make sure there are double quotes around it. Ruby on the other hand can use strings, symbols and numbers as keys.

## JavaScript Object:
{%gist cutofmyjib/feaed616f291100652f7 %}

## Ruby Hash:
{%gist cutofmyjib/5039d5fbd8cd8d67f4f8 %}

## Accessing Properties in JavaScript:
{%gist cutofmyjib/9bb44d2c454084120d50 %}

Here are some of the different ways you can access Javascript object properties.

## Accessing Keys in Ruby:
{% gist cutofmyjib/17572bf5b8fa21c8350f %}


## Accessing Values in JavaScript
{%gist cutofmyjib/5d3195ca6e4e0d922242 %}

We can access values in Javascript using dot and bracket notations. Make sure that you use double quotes inside the bracket notation (see line 4).

Make sure that the bracket notation is used inside the loop and not a dot notation (see lines 7-9). See what happens on lines 17 through 25 when the dot notation is used.

In addition to the bracket notation (lines 7-9), notice on line 8 that the word key is not inside double quote marks, this is because it is a variable, the "placeholder" we use in the for..in loop.

## Accessing Values in Ruby:
{%gist cutofmyjib/c2e1f82fa48aca552a97 %}
There are different methods in Ruby does the job for us. Line 11 shows you how to access the value of the "Texas" key.

<a class="twitter-share-button" href="https://twitter.com/share"
  data-related="twitterdev"
  data-size="large"
  data-count="none">
Tweet
</a>

<script>
window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
</script>