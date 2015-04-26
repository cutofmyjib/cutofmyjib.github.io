---
layout: post
title: My Playlist Project
category: note
plugin: intense
hidden: true
thumb: playlist.rb

---
I created a simple playlist class using my knowledge of writing Ruby classes. The class will keep track listings of artist and songs, add and remove and shuffle the songs around.

The playlist class is straightforward. If you use Spotify it's pretty simple what a playlist does. You just create a new playlist, add the songs you like and remove them if you don't like it anymore, and you can shuffle the songs around so you don't get bored.

{%gist cutofmyjib/ae9470bcf795c451e81d %}

On lines, 6 and 7, I initialized the essential things such as the name and the empty playlist that will be populated later.

This basic playlist has 3 simple methods, add, remove and shuffle. So for adding songs, it needs 2 parameters which is the artist and the title of the song.

The remove method removes the hash listing in the playlist, so it has 1 parameter which is the actual hash so that it's safer. For example you want to delete Grimes, and there's 2 songs by her, then you delete both of them. Since this method is not a robust yet, the parameter is specific.

The easiest method is shuffle. It's pretty straightforward.


