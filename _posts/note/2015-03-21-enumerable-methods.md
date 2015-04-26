---
layout: post
title: Free Map Lesson
category: note
plugin: intense
hidden: true
---

Here we have a method called `acronify`, we are going to use the Enumerable Method &#35;map, let's find out what it does.

```ruby
def acronify(sentence)
  sentence.map { |word| word[0].upcase }.join("")
end

puts acronify(["free", "map", "lesson"])
# => FML
```
That's right, `acronify`, makes an acronym out of the given array! Let's try another example.

```ruby
puts acronify(["fund", "my", "learning"])
# => FML
```

What the &#35;map method does is it goes through each element in the array and executes the code inside the curly braces. So for every word in the array, it takes the first character (index of 0) and turns it into uppercase, it does this until the end of the array, using `.join("")`, the output is now a string.

`["want", "to", "feedback", "?"]`
<p class=store>
  <a href="https://www.twitter.com/intent/tweet?text=@bossigner;url=http://http://cutofmyjib.github.io/enumerable-methods.html"target="_blank">WTF?</a>
</p>
