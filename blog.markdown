---
layout: page
title: Blog
permalink: /blog/
---
{% for site_tag in site.blog_tags %}
  {% assign tag = site_tag.title | downcase %}
  <span class="blog-filter">
  <a href="{{ site.baseurl }}/blog/tags/{{ tag | slugify }}/" class="{% if site_tag.color %} bg--{{site_tag.color}}{% endif %}">{{ tag | capitalize }}</a>
  </span>
{% endfor %}

{% for post in site.posts %}
  {% include post_block.html post=post %}
{% endfor %}
