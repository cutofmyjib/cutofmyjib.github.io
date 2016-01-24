---
layout: post
title: Searchagrahm
category: projects
plugin: intense
hidden: true
scheme-link: "#f15a5f"
---

[Searchagrahm](https://github.com/cutofmyjib/searchagrahm) is a small web app built around Instagram API, you can search an instagrammer and it shows their 10 most recent media.
![](../posts-imgs/searchagrahm.jpg)

## **The look:**
Semantic UI made it easier for me to finish this challenge on time. Since designing a web application takes time, I turned to Semantic UI to build something fast and nice looking.


## **React:**
From what I understand, React allows you to be better at writing Javascript, for this challenge, I thought it would be a good learning experience since I'm trying to get better at it. Also, I want to get better at writing modular code, it was an opportunity to do it in this challenge as I learned how to reuse some components.

## **Instagram API and reqwest:**
Getting the data from Instagram API was a bit tricky. First, I used [react-refetch](https://github.com/heroku/react-refetch), but there was a lot of trouble getting the json because of CORS, also it was not an ajax call, it's fetch. Through [Leo Hsieh's post](http://leoj.js.org/personal/React-iTunes-Search/), I found [reqwest](https://github.com/ded/reqwest) as better option, the key to getting the data had to be jsonp instead of json.

## **PS:**
Searchagrahm in sandbox mode which can only search a limited amount of users that are in my instagram developer sandbox, I mostly queried 'dana'. If you want to be in my sandbox, please let me know.

