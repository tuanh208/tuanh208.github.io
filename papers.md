---
layout: page
title: Papers
permalink: /papers/
---

{% for year in site.data.papers %}
### {{year[0]}}
--------------
{% for paper in year[1] %}
  <div class="row">
    <div class="paper-img">
      <img src="{{ paper.img }}" class="thumbnail" width="200" height="200" />
    </div>
    <div class="paper-text">
      <a href="{{ paper.link }}"><b>{{ paper.title }}</b></a> <span style="font-size:16px;"><i>{{ paper.where }}</i></span><br> 
      <span style="font-size:15px;"><i>{{ paper.authors }}</i></span> <br> 
      <a class="label label-info"> Abstract <span class="abstract">{{ paper.abstract }}</span> </a> &nbsp; 
      {% if paper.code and paper.code != '' %}
        <a href="{{ paper.code }}" class="label label-success">Code</a>
      {% endif %}
      {% if paper.blog and paper.blog != '' %}
        <a href="{{ paper.blog }}" class="label label-danger">Blog</a> 
      {% endif %}
      {% if paper.demo and paper.demo != '' %}
        <a href="{{ paper.demo }}" class="label label-warning">Demo</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
{% endfor %}

<br>
\* Equal contribution as first authors.

