---
layout: page
title: Outreach
permalink: /outreach/
menu_order: 4
---

## Publications

<div class="publication-list" markdown="1">
{% assign current_year = "" %}
{% for pub in site.data.publications %}
{% if pub.year != current_year %}
{% assign current_year = pub.year %}
<div class="publication-item year-start">
<span class="pub-year">{{ pub.year }}</span>
<span class="pub-citation">{{ pub.authors }} ({{ pub.year }}). <em>{{ pub.title }}</em>. {{ pub.journal }}{% if pub.link %} — <a href="{{ pub.link }}" target="_blank">Link</a>{% endif %}</span>
</div>
{% else %}
<div class="publication-item">
<span class="pub-year"></span>
<span class="pub-citation">{{ pub.authors }} ({{ pub.year }}). <em>{{ pub.title }}</em>. {{ pub.journal }}{% if pub.link %} — <a href="{{ pub.link }}" target="_blank">Link</a>{% endif %}</span>
</div>
{% endif %}
{% endfor %}
</div>

## Events

<div class="event-list" markdown="1">
{% assign current_year = "" %}
{% for event in site.data.events %}
{% if event.date != current_year %}
{% assign current_year = event.date %}
<div class="event-item year-start">
<span class="event-date">{{ event.date }}</span>
<span class="event-text">{{ event.title }}{% if event.location %}, {{ event.location }}{% endif %}</span>
</div>
{% else %}
<div class="event-item">
<span class="event-date"></span>
<span class="event-text">{{ event.title }}{% if event.location %}, {{ event.location }}{% endif %}</span>
</div>
{% endif %}
{% endfor %}
</div>
