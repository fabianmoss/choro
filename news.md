---
layout: page
title: News
permalink: /news/
menu_order: 3
---

<ul class="post-list">
  {%- for post in site.posts -%}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
    {%- if post.categories -%}
    <p class="post-categories">
      {%- for category in post.categories -%}
      <span class="category-tag">{{ category }}</span>
      {%- endfor -%}
    </p>
    {%- endif -%}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
  {%- endfor -%}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
