---
layout: post
title: Why use Arrays or Hashes?
category: note
plugin: intense
hidden: true
---

Arrays and hashes are pretty similar, accessing them is different. So when stuff is deleted in a hash, the key and the value are gone while in an array, the object is the only thing deleted.

```ruby
my_array = ["guitar", "trumpet", "xylophone"]
```
In this example, `guitar` is accessed by it's position or index in the array which is `my_array[0]`.

When using hashes, you can access a <strong>value</strong> using a <strong>key</strong>. So here, `guitar` is accessed by it's <strong>key</strong>, `my_hash["string"]`.

```ruby
my_hash = { "string" => "guitar", "brass" => "trumpet", "percussion" => "xylophone" }
```

So when I delete `guitar` in `my_array`, `my_array[0]` is now `trumpet`.

```ruby
my_array = ["trumpet", "xylophone"]
```

But when I delete `guitar` in `my_hash`, `my_hash["string"]` is nil.

```ruby
my_hash = { "brass" => "trumpet", "percussion" => "xylophone" }
```

<p class=store>
  <a href="https://www.twitter.com/intent/tweet?text=@bossigner;url=http://cutofmyjib.github.io/arrays-hashes.html" target="_blank">Feedback</a>
</p>
