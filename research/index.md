---
layout: homepage
title: Research
permalink: /research/
---

# Research

[Home]({{ '/' | relative_url }})

## Publications

{% for project in site.data.publications.main %}
- [{{ project.title }}]({{ project.page | relative_url }}) — {{ project.conference }}
{% endfor %}

## In Submission / Preparation

{% for project in site.data.publications.in_submission %}
- [{{ project.title }}]({{ project.page | relative_url }}) — {{ project.conference }}
{% endfor %}

## Other Research

{% for project in site.data.publications.other_research %}
- [{{ project.title }}]({{ project.page | relative_url }}) — {{ project.conference }}
{% endfor %}
