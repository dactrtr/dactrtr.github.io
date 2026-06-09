---
layout: default
title: Blog
permalink: /blog/
body_class: portfolio-landing blog-landing
---
<div class="posts">
  <h2 class="blog-title">↓blog↓</h2>
  {% for post in site.posts limit:15 %}
    <article class="post">
      {% if post.feature %}
        <a href="{{ site.baseurl }}{{ post.url }}"
           style="background:url({{ post.feature }});background-size:cover;background-position-y:center;">
      {% else %}
        <a href="{{ site.baseurl }}{{ post.url }}"
           style="background:url(http://i.giphy.com/FRmOsocKhM1xK.gif);background-size:cover;background-position-y:center;">
      {% endif %}
          <span class="cover"></span>
          <div class="data-post">
            <h1 class="title">{{ post.title }}</h1>
            <h4 class="desc">{{ post.titledesc }}</h4>
            <h3 class="date">{{ post.date | date: "%B %e, %Y" }}</h3>
            <div class="tags-holder">
              <span class="language">
                {% if post.about == "life" %}
                  life
                {% else %}
                  devblog
                {% endif %}
              </span>
            </div>
          </div>
      </a>
    </article>
  {% endfor %}
</div>
