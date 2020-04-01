---
layout: page
title: Archive
publish: true

permalink: /blog/archive/
category: astronomy
---

Welcome to the archives of my site. You can jump to a category's archive via the Table of Contents or just look through all the posts.

# Table of Contents

<!-- Sorted alphabetically thanks to Vanni Totaro's answer -->
<!-- https://stackoverflow.com/questions/6387540/how-to-sort-a-hash-converted-to-an-array-in-liquid -->
{% assign sortedcats = site.categories | sort %}
{% for catplus in sortedcats %}
{% assign cat = {catplus | first} %}
<!-- site.cateories is a big object, but the first part of  each iteration is the catgory name!  -->
  * [ {{cat | capitalize}} ](#{{cat | url_encode}})
{% endfor %}


# All  Posts
{% for post in site.posts %}
  * {{ post.date | date: "%Y-%m-%d" }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

<!-- iterate through all the categories -->
{% assign sortedcats = site.categories | sort %}
{% for catplus in sortedcats %}

{% assign cat = {catplus | first} %}
<!-- get category title, make a header and tag the section for a internal page link-->
<!-- need to add id so that it is styled like the internal page h1 not the page title h1 -->
<h1 id="all--post">{{cat | capitalize}} <a name="{{cat | url_encode}}"></a></h1> 
<!-- get posts, iterate over them like in 'all posts' -->
{% for post in site.posts %}
{% if post.category == {cat} %}
<!-- * {{post.title}}, {{post.url |  prepend: site.baseurl}} -->
  * {{ post.date | date: "%Y-%m-%d" }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endif %}
{% endfor %}

{% endfor %}