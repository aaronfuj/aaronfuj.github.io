---
layout: page
title: Portfolio
permalink: /portfolio/
---
{% for project in site.projects %}
## [{{project.name}}]({{project.project_url}}){:target="_blank"}
{{project.content}}
{% endfor %}
